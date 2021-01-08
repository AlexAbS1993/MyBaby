import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import config from 'config'
import jwt from 'jsonwebtoken'

export const controller = {
    registration: async (req, res) => {
        try{
            const candidate = await User.findOne({login: req.body.login})
            if (candidate){
                res.status(400).json({
                    message: "пользователь уже существует"
                })
                return
            }
            const invite = req.body.invite
            const isInviteValidFunction = (invite) => {
                const invites = config.get('invites')
                return invites.some((e) => {
                    if (e.value === invite & e.used === false){
                    return true
                }
            })
        }
            const isInviteValid = isInviteValidFunction(invite)
            if (isInviteValid){
                const salt = bcrypt.genSaltSync(10)
                const password = bcrypt.hashSync(req.body.password, salt)
                const newUser = new User({
                    login: req.body.login,
                    password: password,
                    statusFamily: req.body.statusFamily
                })
                await newUser.save()
                res.json(newUser)
            }
            else {
                res.status(400).json({
                    message: "недействительный инвайт"
                })
                return
            }
        }
        catch(e){
            res.status(400).json({
                message: "Error",
                error: e.message
            })
        }
    },
    login: async (req, res) => {
        try{
            const candidate = await User.findOne({login: req.body.login})
            if (candidate == null){
                const error = {
                    message: "такого пользователя не существует"
                }
                await res.status(404).json(error)
                return
            }
            const isPasswordTrue = await bcrypt.compare(req.body.password, candidate.password)
            if (!isPasswordTrue){
                await res.status(400).json({
                    message: "неправильный пароль"
                })
                return
            }
            const token = jwt.sign({login: req.body.login, id: candidate._id}, config.get("secret"))
            res.status(200).json({
                token: `Bearer ${token}`,
                login: candidate.login,
                statusFamily: candidate.statusFamily,
                status: candidate.status,
                _id: candidate._id 
            })
        }
        catch(e){
            res.status(400).json({
                message: "Error",
                error: e.message
            }) 
        }
    },
    getLogin: async (req, res) => {
        try{
            if (req.user){
                if (req.user.id){
                    const user = await User.findById(req.user.id, '-password')
                    if (!user){
                        res.status(404).json({
                            message: "Not Found"
                        })
                        return
                    }
                    else{
                        res.json(user)
                    }
                }
            }
        }
        catch(e){
            res.status(400).json({
                message: "Error",
                error: e.message
            }) 
        }
    },
}
