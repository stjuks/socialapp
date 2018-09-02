const sharp = require('sharp');

const uploadImage = destination => {
    return (req, res, next) => {
        const { file } = req;

		file.filename = `${Date.now()}.jpg`;

        if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
            return res.status(400).json({ msg: 'Only PNG and JPEG files are allowed!' });
        }

        sharp(file.buffer)
            .resize(1000, 1000)
            .jpeg({ quality: 80 })
            .max()
            .toFile(`${destination}/${file.filename}`, err => {
                console.log(err);
        })

        next();
    }
}

module.exports = {
    uploadImage
}