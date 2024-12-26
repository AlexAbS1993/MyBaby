import Photos from "../models/Photos.js"
import config from 'config'

const photosController = {
    getPhoto: async (req, res) => {
        try {
            const lim = 9
            const skip = (req.query.skip - 1) * lim
            const photos = await Photos.find().skip(skip).limit(lim).sort({dateOfPublish: -1}).populate({path: "author", select: '-password -status'}).populate({path: "commentary", populate: {path: "author", select: '-password',}})
            const count = (await Photos.find()).length
            res.json({photos, count})
        }
        catch(e){
            res.status(400).json({
                error: e.message
            })
        }
        
    },
    setPhoto: async (req, res) => {
        try {
            const path = `http://${config.get('url')}/${req.file.destination}${req.file.filename}`
            const photos = new Photos({
                photo: path,
                author: req.user.id,
                dateOfPublish: Date.now()
            })
            await photos.save()
            res.json(photos)
        }
        catch(e){
            res.status(400).json({
                error: e.message
            })
        }
    }
}


export default photosController