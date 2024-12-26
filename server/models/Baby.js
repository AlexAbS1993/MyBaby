import mongoose from 'mongoose'


const Baby = new mongoose.Schema({
    statusFamily: String,
    firstName: {type: String, required: true},
    secondName: {type: String, required: true},
    thirdName: {type: String, required: true},
    birthDate: {type: String, required: true},
    photos: [{type: mongoose.Schema.Types.ObjectId, ref: "Photo"}],
    siblings: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
})

export default mongoose.model('Baby', Baby)