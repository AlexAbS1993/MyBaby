import Phrases from '../models/Phrases.js'
import Commentary from '../models/Commentary.js'

const phrasesController = {
    getPhrases: async (req, res) => {
        try{
            const lim = 5
            const skip = (req.query.skip - 1) * lim
            const phrases = await Phrases.find().sort({dateOfPublish: -1}).skip(skip).limit(lim).populate({path: "comment", populate:{path: "author"}}).populate({path: "author"})
            const count = await Phrases.find().count()
            const response = {phrases, count}
            res.json(response)

        }
        catch(e){
            res.status(400).json({
                message: "Error",
                error: e.message
            })
        }
    },
    postPhrases: async (req, res) => {
        try{
            const newPhrase = new Phrases({
                ...req.body
            })
            newPhrase.wordEvo = [req.body.phrase]
            newPhrase.author = req.user.id
            await newPhrase.save()                      
            res.json(newPhrase)
        }
        catch(e){
            res.status(400).json({
                message: "Error",
                error: e.message
            })
        }
    },
    changePhrases: async (req, res) => {
        try{
            // let test = await Phrases.findOne({_id: req.body._id})
            // let newArray = [...test.wordEvo]
            // if (req.body.phrase !== undefined){
            //     newArray[newArray.length - 1] = req.body.phrase
            // }  
            let phrase = await Phrases.findOneAndUpdate({_id: req.body._id}, {$set: {...req.body}, $push: {wordEvo: req.body.phrase}}, {new: true})  
            await phrase.save()
            res.json(phrase)
        }
        catch(e){
            res.status(400).json({
                message: "Error",
                error: e.message
            })
        }
    },
    addComment: async (req, res) => {
        try{
            let phrase = await Phrases.findOne({_id: req.body.id})  
            let comment = new Commentary({
                value: req.body.value,
                dateOfPub: Date.now(),
                author: req.user.id,
                authorName: req.body.auth,
                phrase: req.body.id
            })
            await phrase.comment.push(comment._id)
            await phrase.save()
            await comment.save()
            res.json(comment)
        }
        catch(e){
            res.status(400).json({
                message: "Error",
                error: e.message
            })
        }
    },
}

export default phrasesController