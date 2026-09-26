import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog posts: one Markdown file per post and language in src/content/blog/{tr,en}/.
 * Frontmatter example:
 *
 * ---
 * title: "Konteyner tipleri: hangisi yükünüze uygun?"
 * description: "20', 40' ve high cube konteynerleri karşılaştırıyoruz."
 * date: 2026-10-01
 * lang: tr
 * slug: konteyner-tipleri-rehberi
 * draft: false
 * ---
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['tr', 'en']),
    slug: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
