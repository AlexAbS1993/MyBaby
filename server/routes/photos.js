import {Router} from 'express'
import passport from 'passport'
import uploads from '../middleware/uploads.js'
import controller from '../controllers/photos.js'

const router = Router()

router.get('/', passport.authenticate('jwt', {session: false}), controller.getPhoto )
router.post('/create', passport.authenticate('jwt', {session: false}), uploads.single('image'), controller.setPhoto )

export default router