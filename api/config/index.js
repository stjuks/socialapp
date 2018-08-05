const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/')
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname))
	},
	fileFilter: (req, file, cb) => {
		if (file.mimetype !== 'image/png') {
			req.fileValidationError = 'You are only allowed to upload images!';
			return cb(null, false);
		}
		cb(null, true);
	}
});

const limits = {
	fileSize: 1024 * 1024 * 1024
}

module.exports = {
	storage,
	limits
};