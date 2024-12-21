import mongoose from 'mongoose'
import config from 'config'
import {app} from './app.js'

const PORT = process.env.PORT || 5000

const serverStart = async () => {
    try{
        await mongoose.connect(config.get('dbAlterConnect'), {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("DB has connected")
        app.listen(PORT, (err) => {
            if (err){
                console.log(err)
            }
            else {
                console.log("Server has started")
            }
        })
    }
    catch(e){
        console.log(e)
    }
}

serverStart()