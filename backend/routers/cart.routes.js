import { Router } from "express";
import { AddCartItem,removeCartItem,getCartItem} from '../controllers/cart.controllers.js'
const router = Router()
import Auth from '../middlewares/auth.js'

router.route('/add').post(Auth,AddCartItem)
router.route('/remove').post(Auth,removeCartItem)
router.route('/get').post(Auth,getCartItem)

export default router