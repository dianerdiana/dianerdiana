import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.json' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    problem: z.string(),
    solution: z.string(),
    result: z.string(),
    technologies: z.array(z.string()).min(1),
    categories: z.array(z.string()).min(1),
    role: z.string(),
    year: z.string(),
    order: z.number(),
  }),
});

const projectCategories = defineCollection({
  loader: glob({ base: './src/content/project-categories', pattern: '**/*.json' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    readTimeMinutes: z.number().int().positive(),
    views: z.number().int().nonnegative(),
    topics: z.array(z.string()).min(1),
    image: z.string(),
    imageAlt: z.string(),
  }),
});

const certificates = defineCollection({
  loader: glob({ base: './src/content/certificates', pattern: '**/*.json' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  projects,
  projectCategories,
  articles,
  certificates,
};
