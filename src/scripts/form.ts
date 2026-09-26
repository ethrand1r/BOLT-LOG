/**
 * Shared behaviour for Web3Forms-backed forms (quote, contact).
 *
 * Markup contract (see QuotePage.astro):
 * - <form data-form data-messages='{"required": "...", ...}' novalidate>
 * - controls carry data-label (used as the e-mail field name) and optional data-validate="phone"
 * - radio groups: <fieldset data-choice-group data-required> with an error <p id="{name}-error">
 * - [data-form-summary], [data-form-failure], [data-form-success] state containers
 * Without JavaScript the form still posts to Web3Forms and redirects back with ?sent=1.
 */

type Messages = Record<'required' | 'choose' | 'email' | 'phone' | 'consent' | 'summary' | 'sending', string>;
type Control = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

const ENDPOINT = 'https://api.web3forms.com/submit';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s.-]{7,}$/;

export interface FormOptions {
  /** Builds the notification subject from the collected fields. */
  subject?: (form: HTMLFormElement) => string;
  /** Fields to prefill from the URL query string, e.g. ['mode', 'origin']. */
  prefill?: string[];
}

export function initForm(selector: string, options: FormOptions = {}) {
  const form = document.querySelector<HTMLFormElement>(selector);
  if (!form) return;

  const messages: Messages = JSON.parse(form.dataset.messages ?? '{}');
  const summary = form.querySelector<HTMLElement>('[data-form-summary]');
  const failure = form.querySelector<HTMLElement>('[data-form-failure]');
  const success = document.querySelector<HTMLElement>(`[data-form-success="${form.id}"]`);
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const submitLabel = submit?.querySelector<HTMLElement>('.btn__label');
  const idleLabel = submitLabel?.textContent ?? '';
  const touched = new Set<string>();

  const params = new URLSearchParams(window.location.search);

  // No-JS round trip: Web3Forms redirected back here after a successful post.
  if (params.get('sent') === '1') {
    showSuccess(false);
    return;
  }

  for (const key of options.prefill ?? []) {
    const value = params.get(key);
    if (!value) continue;
    const radios = form.querySelectorAll<HTMLInputElement>(`input[type="radio"][name="${key}"]`);
    if (radios.length) {
      radios.forEach((r) => (r.checked = r.value === value));
    } else {
      const el = form.elements.namedItem(key) as Control | null;
      if (el && 'value' in el) el.value = value.slice(0, 120);
    }
  }

  // ---------- Validation ----------
  function errorFor(el: Control): string {
    if (el instanceof HTMLInputElement && el.type === 'checkbox') {
      return el.required && !el.checked ? messages.consent : '';
    }
    const value = el.value.trim();
    if (el.required && !value) return messages.required;
    if (!value) return '';
    if (el instanceof HTMLInputElement && el.type === 'email' && !EMAIL_RE.test(value)) return messages.email;
    if (el.dataset.validate === 'phone' && (!PHONE_RE.test(value) || value.replace(/\D/g, '').length < 7)) {
      return messages.phone;
    }
    return '';
  }

  function setError(el: HTMLElement, errorId: string, message: string) {
    const box = form!.querySelector<HTMLElement>(`#${CSS.escape(errorId)}`);
    el.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (!box) return;
    const text = box.querySelector('span') ?? box;
    text.textContent = message;
    box.hidden = !message;
  }

  function checkControl(el: Control): boolean {
    const message = errorFor(el);
    setError(el, `${el.id}-error`, message);
    return !message;
  }

  function checkGroup(group: HTMLFieldSetElement): boolean {
    const checked = group.querySelector('input:checked');
    const message = group.hasAttribute('data-required') && !checked ? messages.choose : '';
    setError(group, `${group.dataset.choiceGroup}-error`, message);
    return !message;
  }

  const controls = () =>
    Array.from(form.querySelectorAll<Control>('.field-control, .consent input[type="checkbox"]'));
  const groups = () => Array.from(form.querySelectorAll<HTMLFieldSetElement>('[data-choice-group]'));

  form.addEventListener('focusout', (e) => {
    const el = e.target as Control;
    if (!el.matches?.('.field-control')) return;
    touched.add(el.name);
    if (el.value.trim() || el.getAttribute('aria-invalid') === 'true') checkControl(el);
  });

  form.addEventListener('input', (e) => {
    const el = e.target as Control;
    if (el.getAttribute('aria-invalid') === 'true') checkControl(el);
  });

  form.addEventListener('change', (e) => {
    const el = e.target as HTMLInputElement;
    if (el.type === 'radio') {
      const group = el.closest<HTMLFieldSetElement>('[data-choice-group]');
      if (group?.getAttribute('aria-invalid') === 'true') checkGroup(group);
    }
    if (el.type === 'checkbox' && el.getAttribute('aria-invalid') === 'true') checkControl(el);
  });

  // ---------- Submit ----------
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (failure) failure.hidden = true;

    const results = [...groups().map(checkGroup), ...controls().map(checkControl)];
    if (results.includes(false)) {
      if (summary) {
        summary.textContent = messages.summary;
        summary.hidden = false;
      }
      const firstInvalid = form.querySelector<HTMLElement>(
        '[aria-invalid="true"].field-control, [aria-invalid="true"] input, .consent [aria-invalid="true"]',
      );
      firstInvalid?.focus();
      return;
    }
    if (summary) summary.hidden = true;

    setBusy(true);
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(buildPayload()),
      });
      const result = await response.json().catch(() => ({}));
      if (response.ok && result.success) {
        showSuccess(true);
      } else {
        throw new Error(result.message ?? `HTTP ${response.status}`);
      }
    } catch {
      if (failure) {
        failure.hidden = false;
        failure.focus();
      }
    } finally {
      setBusy(false);
    }
  });

  function buildPayload() {
    const data: Record<string, string | boolean> = {};
    for (const el of Array.from(form.elements) as Control[]) {
      if (!el.name || el.disabled) continue;
      if (el instanceof HTMLInputElement && el.type === 'radio' && !el.checked) continue;
      if (el instanceof HTMLInputElement && el.type === 'checkbox') {
        if (el.name === 'botcheck') data.botcheck = el.checked;
        // Record consent in the e-mail so there is a trace of it (KVKK).
        else if (el.checked) data[el.dataset.label ?? el.name] = 'Onaylandı / Accepted';
        continue;
      }
      if (el.type === 'hidden') {
        // "redirect" only serves the no-JS post; with fetch it would turn the reply into a 303.
        if (el.name !== 'redirect') data[el.name] = el.value;
        continue;
      }
      const value = el.value.trim();
      if (!value) continue;
      // Keep the reserved "email" key so Web3Forms sets Reply-To; label everything else.
      if (el.name === 'email') {
        data.email = value;
        continue;
      }
      const label =
        el instanceof HTMLInputElement && el.type === 'radio'
          ? (el.closest<HTMLElement>('[data-choice-group]')?.dataset.label ?? el.name)
          : (el.dataset.label ?? el.name);
      data[label] =
        el instanceof HTMLInputElement && el.type === 'radio' ? (el.dataset.display ?? value) : value;
    }
    if (options.subject) data.subject = options.subject(form!);
    data['Sayfa / Page'] = window.location.href.split('?')[0];
    return data;
  }

  function setBusy(busy: boolean) {
    if (!submit) return;
    submit.disabled = busy;
    submit.setAttribute('aria-busy', String(busy));
    if (submitLabel) submitLabel.textContent = busy ? messages.sending : idleLabel;
  }

  function showSuccess(scroll: boolean) {
    if (!success) return;
    form!.hidden = true;
    success.hidden = false;
    if (scroll) success.scrollIntoView({ block: 'center' });
    success.focus({ preventScroll: true });
  }
}
