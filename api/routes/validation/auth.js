const Joi = require('joi');

const register = (req, res, next) => {
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().min(3).max(25).required(),
        password: Joi.string().min(6).max(55).required(),
        email: Joi.string().email()
    });

    Joi.validate(req.body, schema, (err, result) => {
        if (err) {
            res.status(400).json({ msg: err.details[0].message });
            return;
        }
        next();
    })
};

module.exports = {
    register
};