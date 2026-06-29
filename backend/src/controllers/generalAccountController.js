const {
    createGeneralAccount
} = require("../services/generalAccountServices");

const generalAccountRegister = async (req, res) => {

    try {

        const {
            name,
            openingBalance,
            color
        } = req.body;

        await createGeneralAccount(
            name,
            openingBalance,
            color
        );

        return res.status(201).json({
            message: "Account created successfully"
        });

    }
    catch (error) {

        if (error.status === 400) {

            return res.status(400).json({
                field: error.field,
                message: error.message
            });

        }

        console.error(error);

        return res.status(500).json({
            message: "Server Error"
        });

    }

};

module.exports = {
    generalAccountRegister
};