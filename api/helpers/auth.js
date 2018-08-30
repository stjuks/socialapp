const jwt = require('jsonwebtoken');

const SECRET = 'RWxhcyBtZXRzYXMgbXV0aW9udSwgDQprZXNldCBrdXVza2kgbm9vcmksIHZhbnUuIA0KOiw6IEthZGFrcMO1w7VzYSBqdXVyZSBhbGwgDQplbHVydXVtIHRhbCBzw7xnYXZhbC46LDogIA==';

const verifyToken = (req, res, next) => {
	const header = req.headers['authorization'];
	if (typeof header !== 'undefined') {
		const token = header.split(' ')[1];
		req.token = token;
		jwt.verify(token, SECRET, (err, data) => {
			if (err) {
				res.status(403).send({
					msg: 'You do not have access to this resource!'
				});
				return;
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
	verifyToken: verifyToken,
	secret: SECRET
};