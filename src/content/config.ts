import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    cardDescription: z.string().optional(),
    tags: z.array(z.string()).default([]),
    links: z.array(
      z.object({
        label: z.string(),
        url: z.string(),
      })
    ).default([]),
    github: z.string().optional(),
    showGitHubMetrics: z.boolean().default(false),
    featured: z.boolean().default(false),
    thumbnail: z.string().optional(),
  }),
});

export const collections = { posts, projects };
