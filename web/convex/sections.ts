import { v } from "convex/values";
import { mutationGeneric } from "convex/server";

export const upsert = mutationGeneric({
  args: {
    slug: v.string(),
    label: v.string(),
    icon: v.optional(v.string()),
    order: v.optional(v.number()),
    parentSlug: v.optional(v.string()),
    visibility: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let parentId: string | undefined = undefined;
    if (args.parentSlug) {
      const parent = await ctx.db
        .query("sections")
        .withIndex("by_slug", (q) => q.eq("slug", args.parentSlug!))
        .unique();
      parentId = parent?._id;
    }

    const existing = await ctx.db
      .query("sections")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();

    const value = {
      slug: args.slug,
      label: args.label,
      icon: args.icon,
      order: args.order,
      visibility: args.visibility,
      parentId,
    } as const;

    if (existing) {
      await ctx.db.patch(existing._id, value as any);
      return existing._id;
    }
    const id = await ctx.db.insert("sections", value as any);
    return id;
  },
});

export const removeBySlug = mutationGeneric({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    const existing = await ctx.db
      .query("sections")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .unique();
    if (!existing) return false;
    await ctx.db.delete(existing._id);
    return true;
  },
});


