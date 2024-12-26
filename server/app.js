import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import phrasesRouter from './routes/phrases.js'
import datesRouter from './routes/dates.js'
import babyRouter from './routes/baby.js'
import photosRouter from './routes/photos.js'
import passportStartFunction from './middleware/passport.js' 
import passport from 'passport'

export const app = express()

app.use(cors())
app.use(express.json())
app.use(passport.initialize())
passportStartFunction(passport)

app.use("/uploads", express.static('uploads'))
app.use('/api/auth', authRouter)
app.use('/api/phrases', phrasesRouter)
app.use('/api/dates', datesRouter)
app.use('/api/baby', babyRouter)
app.use('/api/photos', photosRouter)