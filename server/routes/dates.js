import {Router} from 'express'
import controller from '../controllers/dates.js'
import passport from 'passport'
import uploads from '../middleware/uploads.js'

const router = Router()

router.get('/', passport.authenticate('jwt', {session: false}) , controller.getDates)
router.post('/create', passport.authenticate('jwt', {session: false}), uploads.single("image") , controller.createDate)
router.post('/createTest', passport.authenticate('jwt', {session: false}), uploads.single("image") , controller.createDateTest)

export default router