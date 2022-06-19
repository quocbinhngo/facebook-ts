import zod, { TypeOf } from "zod";

export const registerAccountValidation = zod.object({
  body: zod.object({
    firstName: zod
      .string({ required_error: "First name is required" })
      .min(3, "First name must be between 3 and 30 characters")
      .max(30, "First name must be between 3 and 30 characters"),
    lastName: zod
      .string({ required_error: "Last name is required" })
      .min(3, "Last name must be between 3 and 30 characters")
      .max(30, "Last name must be between 3 and 30 characters"),
    // username: zod
    //   .string({ required_error: "Userame is required" })
    //   .min(3, "Username must be between 3 and 30 characters")
    //   .max(30, "Username must be between 3 and 30 characters"),
    email: zod
      .string({ required_error: "Email is required" })
      .email("Invalid email"),
    password: zod
      .string({ required_error: "Password is required" })
      .min(8, "Password must be between 8 and 40 characters")
      .max(40, "Password must be between 8 and 40 characters"),
    gender: zod.string({ required_error: "Gender is required" }),
    birthYear: zod.number({ required_error: "Birth Year is required" }),
    birthMonth: zod.number({ required_error: "Birth Month is required" }),
    birthDay: zod.number({ required_error: "Birth Day is required" }),
  }),
});

export const activateAccountValidation = zod.object({
  body: zod.object({
    accessToken: zod.string({
      required_error: "Access Token must be required",
    }),
  }),
});

export const loginAccountValidation = zod.object({
  body: zod.object({
    email: zod
      .string({ required_error: "Email is required" })
      .email("Invalid email"),
    password: zod
      .string({ required_error: "Password is required" })
      .min(8, "Password must be between 8 and 40 characters")
      .max(40, "Password must be between 8 and 40 characters"),
  }),
});

export type RegisterAccountInput = TypeOf<typeof registerAccountValidation>;
export type ActivateAccountInput = TypeOf<typeof activateAccountValidation>;
export type LoginAccountInput = TypeOf<typeof loginAccountValidation>;
