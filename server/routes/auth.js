import {Router} from 'express'
import {controller} from '../controllers/auth.js'
import passport from 'passport'

const router = Router()

router.post('/registration', controller.registration)
router.post('/login', controller.login )
router.get('/login', passport.authenticate('jwt', {session: false}) ,controller.getLogin)

export default router