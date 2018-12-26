const Joi = require('joi');
const validate = require('./index');

const search = (req, res, next) => {
    const schema = Joi.object().keys({
        query: Joi.string().required().min(3).max(20)
    });

    validate(req.query, schema, res, next);
};

const getUser = (req, res, next) => {
    const schema = Joi.object().keys({
        params: Joi.object.keys({
            username: Joi.string().required().min(3).max(20)
        }),
        user: Joi.object.keys({
            user_id: Joi.number().required()
        })
    }).options({ allowUnknown: true })

    validate(req, schema, res, next);
}

module.exports = {
    search,
    getUser
};