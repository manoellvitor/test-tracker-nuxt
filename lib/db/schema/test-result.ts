import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { component } from "./component";

export const testResult = sqliteTable("testResult", {
  id: int().primaryKey({ autoIncrement: true }),
  componentId: int().notNull().references(() => component.id),
  // Tester ID to be added
  dateTested: int().notNull().$default(() => Date.now()),
  result: text({ enum: ["pass", "fail", "pending"] }).notNull().default("pending"),
  comment: text().notNull(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
