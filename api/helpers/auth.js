const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const header = req.headers['authorization'];
    if (typeof header !== 'undefined') {
        const token = header.split(' ')[1];
        req.token = token;
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if (err) {
                return res.status(403).send({
                    msg: 'You do not have access to this resource!'
                });
            } else {
                req.user = data;
                next();
            }
        });
    } else {
        res.status(403).json({
            msg: 'You must be logged in to access this route!'
        });
    }
};

module.exports = {
    verifyToken
};