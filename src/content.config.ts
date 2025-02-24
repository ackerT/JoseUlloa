// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techs: z.array(z.string()),
    links: z.object({
      github: z.string().optional(),
      demo: z.string().optional()
    }),
    slug: z.string(),
    date: z.date()
  })
});

export const collections = {
  'projects': projectsCollection,
};