import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),

    technologies: z.array(z.string()),
    filterCategory: z.string(),
    website: z.string(),
    npm: z.string(),
    github: z.string(),
    order: z.number(),
    featured: z.boolean(),

    thumbnail: z.string(),
    projectSlider: z.string(),
    slides: z.array(
      z.object({
        title: z.string(),
        type: z.string(),
        image: z.string(),
      })
    ),
  }),
});

export const collections = { articles };
