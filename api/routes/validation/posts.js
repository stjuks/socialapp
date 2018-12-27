const Joi = require('joi');
const validate = require('./index');

const getComments = (req, res, next) => {
    const schema = Joi.object().keys({
        postId: Joi.number().required()
    });

    validate(req.query, schema, res, next);
};

const getReplies = (req, res, next) => {
    const schema = Joi.object().keys({
        parentId: Joi.number().required()
    });

    validate(req.query, schema, res, next);
};

const comment = (req, res, next) => {
    const schema = Joi.object().keys({
        body: Joi.object().keys({
            postId: Joi.number().required(),
            content: Joi.string().required()
        }),
        user: Joi.object().keys({
            user_id: Joi.number().required()
        })
    }).options({ allowUnknown: true });

    validate(req, schema, res, next);
};

const reply = (req, res, next) => {
    const schema = Joi.object().keys({
        body: Joi.object().keys({
            postId: Joi.number().required(),
            parentId: Joi.number().required(),
            content: Joi.string().required()
        }),
        user: Joi.object().keys({
            user_id: Joi.number().required()
        })
    }).options({ allowUnknown: true });

    validate(req, schema, res, next);
};

const createPost = (req, res, next) => {
    const schema = Joi.object().keys({
        body: Joi.object().keys({
            caption: Joi.string()
        }),
        user: Joi.object().keys({
            user_id: Joi.number().required()
        }),
        file: Joi.object().keys({
            filename: Joi.string().required()
        })
    }).options({ allowUnknown: true });

    validate(req, schema, res, next);
};

const getPosts = (req, res, next) => {
    const schema = Joi.object().keys({
        username: Joi.string().required()
    });

    validate(req.params, schema, res, next);
};

const getFollowingPosts = (req, res, next) => {
    const schema = Joi.object().keys({
        user_id: Joi.number().required()
    }).options({ allowUnknown: true });

    validate(req.user, schema, res, next);
};

const like = (req, res, next) => {
    const schema = Joi.object().keys({
        user: Joi.object().keys({
            user_id: Joi.number().required()
        }),
        body: Joi.object().keys({
            postId: Joi.number().required()
        })
    }).options({ allowUnknown: true });

    validate(req, schema, res, next);
};

const unlike = (req, res, next) => {
    const schema = Joi.object().keys({
        user: Joi.object().keys({
            user_id: Joi.number().required()
        }),
        query: Joi.object().keys({
            postId: Joi.number().required()
        })
    }).options({ allowUnknown: true });

    validate(req, schema, res, next);
}

module.exports = {
    getComments,
    getReplies,
    comment,
    reply,
    createPost,
    getPosts,
    getFollowingPosts,
    like,
    unlike
};