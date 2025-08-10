import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  sections: defineTable({
    label: v.string(),
    icon: v.optional(v.string()),
    order: v.optional(v.number()),
    parentId: v.optional(v.id("sections")),
    slug: v.string(),
    visibility: v.optional(v.string()),
  }).index("by_slug", ["slug"]).index("by_parent", ["parentId", "order"]),

  pages: defineTable({
    title: v.string(),
    slug: v.string(),
    path: v.string(),
    sectionId: v.optional(v.id("sections")),
    order: v.optional(v.number()),
    seoTitle: v.optional(v.string()),
    seoDescription: v.optional(v.string()),
    content: v.any(), // lexical JSON
  })
    .index("by_slug", ["slug"]) 
    .index("by_path", ["path"]) 
    .index("by_section_order", ["sectionId", "order"]),

  blogPosts: defineTable({
    title: v.string(),
    slug: v.string(),
    publishedAt: v.optional(v.string()),
    excerpt: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    body: v.any(),
  }).index("by_slug", ["slug"]).index("by_date", ["publishedAt"]),

  redirects: defineTable({
    from: v.string(),
    to: v.string(),
    status: v.optional(v.number()),
  }).index("by_from", ["from"]),
});


