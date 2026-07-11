const multer = require("multer");
const fs = require("fs");

const myStorage = multer.diskStorage({
    destination: (req, res, cb) => {
        let filePath = "/public/uploads/"

        if(!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath, { recursive: true})
        }
        cb(null, filePath)
    },
    filename: (req, file, cb) => {
        let filename = randomStringGenerator(15)+"-"+file.originalname;
        cb(null, filename)
    },
});

const uploader = ( type = 'image') => {
    const uploadConfig = {
        fileSize: 3000000,
        fileFilter: function(req, file, cb) {
            let allowedExts = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp'];

            if(type === 'doc') {
                this.fileSize = 500000
                allowedExts = ['pdf', 'doc', 'docx', 'txt', 'csv', 'xls', 'xlsx']
            } else if(type === 'audio') {
                this.fileSize = 700000
                allowedExts = ['mp3', 'wav', 'ogg', 'aac']
            }
            const fileExt = file.originalname.split(".").pop()
            if(allowedExts.includes(fileExt.toLowerCase())) {
                cb(false, true)
            } else {
                cb({
                    code: 422,
                    message: "File format not supported",
                    status:"INVALID_FILE_FORMAT"
                })
            }
        },
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