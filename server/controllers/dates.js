import Dates from '../models/Dates.js'
import config from 'config'

const dateController = {
    getDates: async (req, res) => {
        try{
            const lim = 5
            const skip = (req.query.skip - 1) * lim
            const dates = await Dates.find().skip(skip).limit(lim).sort({date:-1})
            const count = await Dates.find().count()
            const response = {dates, countOfDates: count}
            res.json(response)
        }
        catch(e){
            res.status(400).json({
                error: e.message
            })
        }
    },    
    createDate: async (req, res) => {
        console.log(req.headers)
        try{
            let filepath
            if(req.file){
                filepath = await `http://${config.get('url')}/${req.file.destination}${req.file.filename}`
            }
            const dateOfPub = Date.now()
            const newDate = new Dates({
                ...req.body,
                author: req.user.id,
                image: filepath || null,
                dateOfPub
            })
            await newDate.save()
            res.status(200).json(newDate)
        }
        catch(e){
            console.log(e)
        }
        
    },
    createDateTest: async (req, res) => {
        try{
            console.log(req.file)
            res.json(req.file)
        }
        catch(e){
            console.log(e)
        }
        
    }
}

export default dateController