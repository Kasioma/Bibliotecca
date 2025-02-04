import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
import { config } from "dotenv";

config();

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
  },

  clientPrefix: "PUBLIC_",
  client: {},
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
