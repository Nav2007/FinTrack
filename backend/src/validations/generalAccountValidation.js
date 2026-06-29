const { z } = require("zod");
const generalAccountSchema =z.object({
    name:z.string().trim().min(1,"Enter Account Name").max(50,"Maximum 50 characters allowed"),
    openingBalance:z.coerce.number().min(0,"Balance cannot be negative"),
    color: z.string().min(1, "Select a color")
})
module.exports = {
    generalAccountSchema
};