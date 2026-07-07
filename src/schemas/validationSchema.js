import { z } from "zod";

/* ==========================
   Personal Information
========================== */

export const personalInfoSchema = z.object({

  fullName: z
    .string()
    .trim()
    .min(3, "Full Name must contain at least 3 characters")
    .max(50, "Full Name cannot exceed 50 characters")
    .regex(
      /^[A-Za-z ]+$/,
      "Only alphabets and spaces are allowed"
    ),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Enter a valid 10-digit Indian mobile number"
    ),

  dob: z
    .string()
    .min(1, "Date of Birth is required")

});

/* ==========================
   Account Information
========================== */

export const accountSchema = z.object({

  username: z
    .string()
    .trim()
    .min(4, "Username must contain at least 4 characters")
    .max(20, "Username cannot exceed 20 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can contain only letters, numbers and underscore"
    ),

  password: z
    .string()
    .min(8, "Minimum 8 characters required")
    .max(30, "Maximum 30 characters allowed")
    .regex(
      /[A-Z]/,
      "Password must contain one uppercase letter"
    )
    .regex(
      /[a-z]/,
      "Password must contain one lowercase letter"
    )
    .regex(
      /\d/,
      "Password must contain one number"
    )
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain one special character"
    ),

  confirmPassword: z.string()

}).refine(

  (data) => data.password === data.confirmPassword,

  {

    message: "Passwords do not match",

    path: ["confirmPassword"]

  }

);