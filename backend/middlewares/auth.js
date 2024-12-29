import {Users} from '../models/users.model.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { asyncHandler } from '../config/asyncHandle.js'
import { ApiError } from '../config/ApiError.js'

dotenv.config({
    path:'../env'
})

const authMiddleware = asyncHandler(async(req,res,next)=>{

    const {token} = req.headers;

    if(!token){
        throw new ApiError(404,{},"Not Authorize login agian")
    }

    try {
        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId = tokenDecode.id
        next()
    } catch (error) {
        throw new ApiError(404,{},"error in auth")
    }

})


export default authMiddleware