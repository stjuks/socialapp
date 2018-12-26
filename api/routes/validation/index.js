const Joi = require('joi');

module.exports = (check, schema, res, next) => {
    Joi.validate(check, schema, (err, result) => {
        if (err) {
            let msg = err.details[0].message.replace(/"/g, '');
            return res.status(400).json({ 
                msg: `${msg.charAt(0).toUpperCase()}${msg.substring(1)}!`
            });
        }
        next();
    })
};
