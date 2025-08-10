import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { syncBlogAfterChange, syncBlogAfterDelete } from "../convexSync";

export const BlogPosts: CollectionConfig = {
  slug: "blogPosts",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "publishedAt", type: "date" },
    { name: "excerpt", type: "textarea" },
    { name: "tags", type: "array", fields: [{ name: "value", type: "text" }] },
    {
      name: "body",
      type: "richText",
      editor: lexicalEditor(),
      required: true,
    },
  ],
  hooks: {
    afterChange: [syncBlogAfterChange],
    afterDelete: [syncBlogAfterDelete],
  },
};


