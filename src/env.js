import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    POSTGRES_DB: z.string(),
    POSTGRES_USER: z.string(),
    POSTGRES_PASSWORD: z.string(),
    DATABASE_HOST: z.string(),
    DATABASE_PORT: z.string().transform((p, ctx) => {
      const parsed = parseInt(p);
      if (isNaN(parsed)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid integer value",
        });
        return z.NEVER;
      }
      return parsed;
    }),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    FILESTORAGE_URL: z.string().default("http://localhost:3001"),
  },
  client: {},
  runtimeEnv: {
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD:process.env.POSTGRES_PASSWORD,
    DATABASE_HOST:process.env.DATABASE_HOST,
    DATABASE_PORT:process.env.DATABASE_PORT,
    NODE_ENV: process.env.NODE_ENV,
    FILESTORAGE_URL: process.env.FILESTORAGE_URL,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
