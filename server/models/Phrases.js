import mongoose from 'mongoose'

const Phrase = new mongoose.Schema({
    phrase: {type: String, required: true},
    realMean: {type: String, required: true},
    comment: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
    dateOfPublish: {type: Date},
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    wordEvo: [{type: String}]
})


export default mongoose.model("Phrase", Phrase)