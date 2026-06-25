const pool = require('../config/db');
const bcrypt = require('bcryptjs');

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

        // Clean incoming data
        const firstNameTrimmed = firstName.trim();
        const lastNameTrimmed = lastName?.trim() || null;
        const usernameTrimmed = username.trim();
        const emailTrimmed = email.trim().toLowerCase();

        // Check email
        const [emailUser] = await pool.query(
            "SELECT id FROM users WHERE email = ?",
            [emailTrimmed]
        );

        if (emailUser.length) {
            return res.status(400).json({
                message: "Email already registered"
            });
        }

        // Check username
        const [usernameUser] = await pool.query(
            "SELECT id FROM users WHERE username = ?",
            [usernameTrimmed]
        );

        if (usernameUser.length) {
            return res.status(400).json({
                message: "Username already taken"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

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
                firstNameTrimmed,
                lastNameTrimmed,
                usernameTrimmed,
                emailTrimmed,
                hashedPassword,
                currency
            ]
        );

        res.status(201).json({
            message: "Registration successful"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });
    }
};

module.exports = {
    register
};