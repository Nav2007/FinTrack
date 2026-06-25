const { z } = require("zod");

const registerSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(2, "First name should have at least 2 characters"),

    lastName: z
        .string()
        .trim()
        .optional(),

    username: z
        .string()
        .trim()
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username must be at most 20 characters")
        .regex(
            /^[a-zA-Z0-9_]+$/,
            "Only letters, numbers and underscores are allowed"
        ),

    email: z
        .string()
        .trim()
        .email("Enter a valid email"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Must contain an uppercase letter")
        .regex(/[a-z]/, "Must contain a lowercase letter")
        .regex(/[0-9]/, "Must contain a number"),

    currency: z
        .string()
        .min(1, "Please select a currency")
});

module.exports = {
    registerSchema
};