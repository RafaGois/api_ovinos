const { validationResult } = require("express-validator");
const createError = require("http-errors");

const service = require("../services/users.service");

const getByUsername = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await service.getByUsername(req.query.username);
        if (response && response.message) {
            throw response;
        }
        res.send(response);
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getByUsername
}