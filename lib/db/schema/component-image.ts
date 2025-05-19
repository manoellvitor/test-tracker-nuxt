import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";
import { testResult } from "./test-result";

export const componentImage = sqliteTable("componentImage", {
  id: int().primaryKey({ autoIncrement: true }),
  key: text().notNull(),
  userId: int().notNull().references(() => user.id),
  testResultId: int().notNull().references(() => testResult.id),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
