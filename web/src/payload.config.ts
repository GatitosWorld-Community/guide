import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Sections } from "./payload/collections/Sections";
import { Pages } from "./payload/collections/Pages";
import { BlogPosts } from "./payload/collections/BlogPosts";

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "dev-secret",
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || "file:.data/payload.sqlite",
    },
  }),
  admin: {
    user: "admins",
  },
  editor: lexicalEditor(),
  collections: [
    {
      slug: "admins",
      auth: true,
      fields: [
        { name: "email", type: "email", required: true },
        { name: "name", type: "text" },
      ],
    },
    Sections,
    Pages,
    BlogPosts,
  ],
});


