const { validationResult } = require("express-validator");
const createError = require("http-errors");

const service = require("../services/auth.service");

const validate = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await service.validate(req.query.token);
        if (response && response.message) {
            throw response;
        }
        res.send(response);
    } catch (err) {
        next(err)
        console.log(err);
    }
}

module.exports = {
    validate
}