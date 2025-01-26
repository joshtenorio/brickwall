// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `brickwall_${name}`);

export const posts = createTable(
  "post",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name", { length: 256 }),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const chats = createTable(
  "chat",
  {
    id: int("chatid", { mode: "number" }).primaryKey({ autoIncrement: true }),
  }
)

export const messages = createTable(
  "message",
  {
    id: int("messageid", { mode: "number" }).primaryKey({ autoIncrement: true }),
    chatid: int("chatid"),
    timestamp: int("timestamp", { mode: "number" }).notNull(),
    text: text("text").default(""),
    s3Key: text("s3key").default(""), // sha hash or whatever idk
    filename: text("filename").default("") // TODO might not be necessary
  }
)