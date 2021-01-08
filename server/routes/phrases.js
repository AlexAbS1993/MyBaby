import {Router} from 'express'
import passport from 'passport'
import controller from '../controllers/phrases.js'

const router = Router()

router.get('/', passport.authenticate('jwt', {session: false}), controller.getPhrases)
router.post('/create', passport.authenticate('jwt', {session: false}), controller.postPhrases )
router.patch('/change', passport.authenticate('jwt', {session: false}), controller.changePhrases)
router.post('/addcomment', passport.authenticate('jwt', {session: false}), controller.addComment )

export default router