import {Router} from 'express'
import {upload} from '../middlewares/multer.js'
import { addFood , getFoodList ,deletOneFood } from '../controllers/food.controllers.js'

const router = Router()

// Router 
router.route('/add').post(upload.single('file'),addFood)
router.route('/all-food').get(getFoodList)
router.route('/delete').post(deletOneFood)


export default router