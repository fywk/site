import { z, defineCollection } from "astro:content";

const users = defineCollection({
  type: "data",
  schema: z.object({
    id: z.string(),
    name: z.string(),
    bio: z.string(),
    avatar_url: z.string().url(),
    links: z.array(
      z.object({
        title: z.string(),
        url: z.string().url(),
        icon: z.string(),
      })
    ),
  }),
});

export const collections = { users };
