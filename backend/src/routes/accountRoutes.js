const express = require("express");

const router = express.Router();

const validate = require("../middlewares/validate");

const {
    generalAccountSchema
} = require("../validations/generalAccountValidation");

const {
    creditAccountSchema
} = require("../validations/creditAccountValidation");

const {
    generalAccountRegister
} = require("../controllers/generalAccountController");

const {
    creditAccountRegister
} = require("../controllers/creditAccountController");

router.post(
    "/general",
    validate(generalAccountSchema),
    generalAccountRegister
);

router.post(
    "/credit",
    validate(creditAccountSchema),
    creditAccountRegister
);

module.exports = router;