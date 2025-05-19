import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";

export const component = sqliteTable("component", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  userId: int().notNull().references(() => user.id),
  serialNumber: text().notNull().unique(),
  macAddress: text().notNull().unique(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
