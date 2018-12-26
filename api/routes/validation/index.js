const Joi = require('joi');

module.exports = (check, schema, res, next) => {
    Joi.validate(check, schema, (err, result) => {
        if (err) {
            return res.status(400).json({ 
                msg: err.details[0].message 
            });
        }
        next();
    })
};
