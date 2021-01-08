import {Router} from 'express'
import controller from '../controllers/baby.js'
import passport from 'passport'


const router = Router()

router.get('/', passport.authenticate("jwt", {session: false}), controller.getBaby )
// router.post('/create', passport.authenticate('jwt', {session: false}), controller.createBaby)

export default router