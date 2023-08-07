import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    coverImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.string().array().optional(),
});

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string().optional(),
    url: z.string().optional(),
    badge: z.string().optional(),
    tags: z.string().array().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const projectCollection = defineCollection({ schema: projectSchema });

export const collections = {
    'blog': blogCollection,
    'project': projectCollection,
}