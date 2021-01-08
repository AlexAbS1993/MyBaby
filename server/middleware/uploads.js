import multer from 'multer'

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, "uploads/")
    },
    filename(req, file, cb){
        const nameOfFile = `${Date.now()}${file.originalname}`
        cb(null, nameOfFile)
    }
})

const fileFilter = (req, file, cb) => {
    console.log(file)
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        cb(null, true)
    }
    else {
        cb(new Error('Wrong Format'))

    }
}


const fileBase = multer({
    storage,
    fileFilter
})

export default fileBase