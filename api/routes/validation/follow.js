const Joi = require('joi');
const validate = require('./index');

const follow = (req, res, next) => {
    if (req.params.followingId === req.user.user_id) {
        res.status(400).json({ 
            msg: 'You can not follow yourself!'
        })
    }

    const schema = Joi.object().keys({
        params: Joi.object().keys({
            followingId: Joi.number().required()
        }),
        user: Joi.object().keys({
            user_id: Joi.number().required()
        })
    }).options({ allowUnknown: true });

    validate(req, schema, res, next);
};

const unfollow = (req, res, next) => {
    if (req.params.followingId === req.user.user_id) {
        return res.status(400).json({ 
            msg: 'You can not unfollow yourself!'
        })
    }

    const schema = Joi.object().keys({
        params: Joi.object().keys({
            followingId: Joi.number().required()
        }),
        user: Joi.object().keys({
            user_id: Joi.number().required()
        })
    }).options({ allowUnknown: true });

    validate(req, schema, res, next);
};

const getFollowers = (req, res, next) => {
    const schema = Joi.object().keys({
        userId: Joi.number().required()
    });

    validate(req.params, schema, res, next);
};

const getFollowing = (req, res, next) => {
    const schema = Joi.object().keys({
        userId: Joi.number().required()
    });

    validate(req.params, schema, res, next);
};

module.exports = {
    follow,
    unfollow,
    getFollowers,
    getFollowing
};