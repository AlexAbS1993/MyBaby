import mongoose from 'mongoose'


const Comment = new mongoose.Schema({
    value: {type: String, required: true},
    dateOfPub: {type: Date},
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    authorName: {type: String, required: true}, 
    phrase: {type: mongoose.Schema.Types.ObjectId, ref: "Phrase"}
})



export default mongoose.model("Comment", Comment)