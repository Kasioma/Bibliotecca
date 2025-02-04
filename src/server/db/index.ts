import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "@/env";
import * as schema from "./schema";

const conn = postgres({
  user: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  db: env.POSTGRES_DB,
});

export const db = drizzle(conn, { schema, logger: true });
