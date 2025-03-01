import { type InferSelectModel } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
  id: text("id").primaryKey(),
  username: text("username").notNull().unique(),
});
export type User = InferSelectModel<typeof userTable>;
