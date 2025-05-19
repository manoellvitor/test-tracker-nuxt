import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";
import { component } from "./component";

export const testResult = sqliteTable("testResult", {
  id: int().primaryKey({ autoIncrement: true }),
  componentId: int().notNull().references(() => component.id),
  userId: int().notNull().references(() => user.id),
  dateTested: int().notNull().$default(() => Date.now()),
  result: text({ enum: ["pass", "fail", "pending"] }).notNull().default("pending"),
  comment: text().notNull(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
