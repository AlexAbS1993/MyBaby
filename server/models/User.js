import mongoose from 'mongoose'

const User = new mongoose.Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    status: {type: String, default: 'user'},
    statusFamily: {type:String, required: true}
})


export default mongoose.model('User', User)