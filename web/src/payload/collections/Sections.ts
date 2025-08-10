import type { CollectionConfig } from "payload";
import { syncSectionAfterChange, syncSectionAfterDelete } from "../convexSync";

export const Sections: CollectionConfig = {
  slug: "sections",
  admin: {
    useAsTitle: "label",
  },
  fields: [
    { name: "label", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "icon", type: "text" },
    { name: "order", type: "number" },
    { name: "visibility", type: "text" },
    {
      name: "parent",
      type: "relationship",
      relationTo: "sections",
    },
  ],
  hooks: {
    afterChange: [syncSectionAfterChange],
    afterDelete: [syncSectionAfterDelete],
  },
};


