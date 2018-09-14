const multer = require('multer');

const fileUpload = multer({
    limits: {
        fileSize: 1024 * 1024 * 10 // 5MB max
    }
});

module.exports = {
    fileUpload
};