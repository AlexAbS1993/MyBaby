import mongoose from 'mongoose'

const Photo = new mongoose.Schema({
    photo: {type: String, required: true, unique: true},
    commentary: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
    dateOfPublish: {type: Date, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

export default mongoose.model("Photo", Photo)