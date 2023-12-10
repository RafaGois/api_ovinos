const { validationResult } = require("express-validator");
const createError = require("http-errors");

const service = require("../services/users.service");

const getByUsernameAndPassword = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await service.getByUsernameAndPassword(req.query.username, req.query.password);
        if (response && response.message) {
            throw response;
        }
        res.send(response);
    } catch (err) {
        next(err)
    }
}

const create = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await service.create(req.body);
        if (response && response.message) {
            throw response;
        }
        res.send(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

module.exports = {
    getByUsernameAndPassword,
    create,
}