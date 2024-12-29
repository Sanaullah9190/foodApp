import { Router } from "express";
import {userRegister,login} from '../controllers/users.controllers.js'

const router = Router()


router.route('/register').post(userRegister)
router.route('/login').post(login)



export default router




