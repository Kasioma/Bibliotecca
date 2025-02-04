import { z } from "zod";
import { userRoles } from "@/utilities/tools";

const userRoleSchema = z.enum([userRoles.user, userRoles.admin]);

export type UserRoleSchema = z.infer<typeof userRoleSchema>;

const passwordSchema = z.string();

export const userLoginSchema = z.object({
  username: z.string().max(20),
  password: passwordSchema,
});

export type UserLoginSchema = z.infer<typeof userLoginSchema>;

export const userRegisterSchema = userLoginSchema
  .extend({
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirm"],
  });

export type UserRegisterSchema = z.infer<typeof userRegisterSchema>;

export const userDataSchema = z.object({
  username: z.string().max(20),
  role: userRoleSchema,
});

export type UserDataSchema = z.infer<typeof userDataSchema>;

export const userModifySchema = z.object({
  id: z.string(),
  username: z.string().max(20),
  role: userRoleSchema,
});

export type UserModifySchema = z.infer<typeof userModifySchema>;
