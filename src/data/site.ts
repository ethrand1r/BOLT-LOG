/** Company facts from CLAUDE.md section 6. Language-neutral values only; labels live in the i18n files. */
export const company = {
  name: 'Bolt Logistics',
  foundingYear: 2021,
  url: 'https://bolt-log.com',
  email: 'cargo@bolt-log.com',
  phones: [
    { display: '+90 533 081 84 00', href: 'tel:+905330818400' },
    { display: '+90 533 081 85 00', href: 'tel:+905330818500' },
  ],
  whatsapp: 'https://wa.me/905330818500',
  /**
   * Web3Forms access key. Public by design: it can only send mail to the inbox it was created for.
   * The recipient is tied to the key, not set here. The key must be created for cargo@bolt-log.com.
   */
  web3formsKey: '9c051b6c-48c3-44f9-bd34-3c150b883cb5',
  address: {
    street: 'Çobançeşme, Nish İstanbul, Sanayi Caddesi',
    district: 'Bahçelievler',
    city: 'İstanbul',
    country: 'TR',
  },
  /** Social accounts are [TBD]. Add URLs here; empty entries are never rendered. */
  social: [] as { name: string; icon: string; url: string }[],
} as const;
