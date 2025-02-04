import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const userRoles = Object.freeze({
  user: "user",
  admin: "admin",
} as const);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
