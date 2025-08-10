import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { syncPageAfterChange, syncPageAfterDelete } from "../convexSync";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "path", type: "text", required: true, unique: true },
    {
      name: "section",
      type: "relationship",
      relationTo: "sections",
    },
    { name: "order", type: "number" },
    { name: "seoTitle", type: "text" },
    { name: "seoDescription", type: "text" },
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor(),
      required: true,
    },
  ],
  hooks: {
    afterChange: [syncPageAfterChange],
    afterDelete: [syncPageAfterDelete],
  },
};


