const pool = require("../config/db");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    try {

        const {
            firstName,
            lastName,
            username,
            email,
            password,
            currency
        } = req.body;

        // Check email
        const [emailUser] = await pool.query(
            "SELECT id FROM users WHERE email = ?",
            [email]
        );

        if (emailUser.length > 0) {
            return res.status(400).json({
                field: "email",
                message: "Email already registered"
            });
        }

        // Check username
        const [usernameUser] = await pool.query(
            "SELECT id FROM users WHERE username = ?",
            [username]
        );

        if (usernameUser.length > 0) {
            return res.status(400).json({
                field: "username",
                message: "Username already taken"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user
        await pool.query(
            `
            INSERT INTO users
            (
                first_name,
                last_name,
                username,
                email,
                password_hash,
                currency
            )
            VALUES (?, ?, ?, ?, ?, ?)
            `,
            [
                firstName,
                lastName,
                username,
                email,
                hashedPassword,
                currency
            ]
        );

        return res.status(201).json({
            message: "Registration successful"
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Server Error"
        });

    }
};

module.exports = {
    register
};