import { Router} from 'express'
import { placeOrder , UserOrder} from '../controllers/order.controllers.js'
import Auth from '../middlewares/auth.js'

const OrderRoute = Router()


OrderRoute.route("/place-order").post(Auth,placeOrder)
OrderRoute.route("/user-orders").post(Auth,UserOrder)


export default OrderRoute