const pool = require("../config/db");

const createGeneralAccount = async (name,openingBalance,color) => {
    const [existingAccount] = await pool.query(
        "SELECT id FROM general_accounts WHERE name = ?",
        [name]
    );

    if (existingAccount.length > 0) {

        const error = new Error("This account already exists");

        error.status = 400;
        error.field = "name";

        throw error;

    }

    await pool.query(
        `
        INSERT INTO general_accounts
        (
            name,
            opening_balance,
            current_balance,
            color
        )
        VALUES (?, ?, ?, ?)
        `,
        [
            name,
            openingBalance,
            openingBalance,
            color
        ]
    );

};

module.exports = {
    createGeneralAccount
};