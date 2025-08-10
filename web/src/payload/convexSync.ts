import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";

export const syncSectionAfterChange: CollectionAfterChangeHook = async ({ doc, req }) => {
  try {
    // TODO: call Convex mutation to upsert section
  } catch (e) {
    req?.payload.logger.warn({ err: e }, "Failed to sync section to Convex");
  }
  return doc;
};

export const syncSectionAfterDelete: CollectionAfterDeleteHook = async ({ id, req }) => {
  try {
    // TODO: call Convex mutation to delete section by external ID
  } catch (e) {
    req?.payload.logger.warn({ err: e }, "Failed to delete section in Convex");
  }
};

export const syncPageAfterChange: CollectionAfterChangeHook = async ({ doc, req }) => {
  try {
    // TODO: call Convex mutation to upsert page
  } catch (e) {
    req?.payload.logger.warn({ err: e }, "Failed to sync page to Convex");
  }
  return doc;
};

export const syncPageAfterDelete: CollectionAfterDeleteHook = async ({ id, req }) => {
  try {
    // TODO: call Convex mutation to delete page
  } catch (e) {
    req?.payload.logger.warn({ err: e }, "Failed to delete page in Convex");
  }
};

export const syncBlogAfterChange: CollectionAfterChangeHook = async ({ doc, req }) => {
  try {
    // TODO: call Convex mutation to upsert blog post
  } catch (e) {
    req?.payload.logger.warn({ err: e }, "Failed to sync blog to Convex");
  }
  return doc;
};

export const syncBlogAfterDelete: CollectionAfterDeleteHook = async ({ id, req }) => {
  try {
    // TODO: call Convex mutation to delete blog post
  } catch (e) {
    req?.payload.logger.warn({ err: e }, "Failed to delete blog in Convex");
  }
};


