import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "posts",
      columns: [
        { name: "title", type: "string" },
        { name: "body", type: "string" },
        { name: "is_pinned", type: "boolean" },
      ],
    }),
  ],
});
