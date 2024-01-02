const { validationResult } = require("express-validator");
const createError = require("http-errors");

const service = require("../services/ovinos.service");

const findAll = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await service.findAll();
        if (response && response.message) {
            throw response;
        }
        res.send(response);
    } catch (err) {
        next(err)
    }
}

const changeActivity = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await service.changeActivity(req.params.id);
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
        next(err)
    }
}

module.exports = {
    findAll,
    create,
    changeActivity,
}