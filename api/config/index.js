const multer = require('multer');

const fileUpload = multer({
    limits: {
        fileSize: 1024 * 1024 * 5 // 5MB max
    }
});

module.exports = {
    fileUpload
};