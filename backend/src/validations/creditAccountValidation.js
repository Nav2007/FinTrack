const {z}=require("zod")
const creditAccountSchema=z.object({
    name: z.string().trim().min(1,"Enter account name").max(50,"Maximum 50 characters"),
    creditLimit: z.coerce.number().positive("Credit limit must be greater than 0"),
    currentOutstanding: z.coerce.number().min(0, "Outstanding cannot be negative"),
    dueDay: z.coerce.number().min(1, "Due day must be between 1 and 31").max(31, "Due day must be between 1 and 31"),
    color: z.string().min(1, "Select an account color")
})
module.exports = {
    creditAccountSchema
};