const Joi = require('joi');
const validate = require('./index');

const register = (req, res, next) => {
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().min(3).max(20).required(),
        password: Joi.string().min(6).max(55).required(),
        email: Joi.string().email()
    });

    validate(req.body, schema, res, next);
};

const login = (req, res, next) => {
    const schema = Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required()
    });

    validate(req.body, schema, res, next);
};

module.exports = {
    register,
    login
};