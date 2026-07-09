const multer = require("multer");

const myStorage = multer.diskStorage({
    destination: (req, res, cb) => {},
    filename: (req, file, cb) => {},
});

const uploader = () => {
    const uploadConfig = {
        fileSize: 3000000,
        fileFilter: function(req, file, cb) {},
    }

    return multer({
        storage: myStorage,
        fileFilter: uploadConfig.fileFilter,
        limits: {
            fileSize: uploadConfig.fileSize
        }
    })
}

module.exports = uploader;