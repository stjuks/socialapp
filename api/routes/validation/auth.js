const Joi = require('joi');
const validate = require('./index');

const register = (req, res, next) => {
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().min(3).max(25).required(),
        password: Joi.string().min(6).max(55).required(),
        email: Joi.string().email()
    });

    validate(req.body, schema, res, next);
};

module.exports = {
    register
};