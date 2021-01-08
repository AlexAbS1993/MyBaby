import mongoose from 'mongoose'

const Dates = new mongoose.Schema({
    date: {type: Date, required: true},
    discription: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    image: {type: String},
    dateOfPub:{type: Date, required: true}
})

export default mongoose.model("Date", Dates)