import { Users } from "../models/users.model.js";
import jwt from 'jsonwebtoken'
import validator from 'validator'
import dotenv from 'dotenv'

import {asyncHandler} from '../config/asyncHandle.js'
import {ApiResponce} from '../config/ApiResponce.js'
import {ApiError} from '../config/ApiError.js'

dotenv.config({
    path:'../env'
})


// const genrateRefreshTokenAndAccessToken = async(userId)=>{
    
//     try {
//         const user = await Users.findById(userId)
//         const accessToken = user.generateAccessToken()
//         const refreshToken = user.generateRefreshToken()
    
//         user.refreshToken = refreshToken
//         await user.save(
//             {
//                 validateBeforeSave:false,
//             }
//         )
//         return {accessToken , refreshToken}
//     } catch (error) {
//         throw new ApiError(500, "some thing is error in accesToken and RefreshTpken Genaretd")
//     }
// }

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

// register the user
const userRegister = asyncHandler(async(req,res)=>{

    const {name , email, password} = req.body

    if([name , email , password].some((filed)=>filed.trim() =="")){
        throw new ApiError(404,"All Feilds is required")
    }

    const existUser = await Users.findOne({email})

    if(existUser){
        throw new ApiError(402,"User allredy exist and Register")
    }

    if(!validator.isEmail(email)){
        throw new ApiError(404,"Enter Valid Email")
    }

    if(password.length <8){
        throw new ApiError(400,"Password is weak")
    }

    const user = await Users.create({
        name,
        email,
        password
    })

    const token = createToken(user._id)

    // const createdUser = await Users.findById(user._id).select(
    //     '-password -refreshToken'
    // )

    // if(!createdUser){
    //     throw new ApiError(404,"some this wrong in the genarating in the refresh token ")
    // }

    return res
    .status(200)
    .json(
        new ApiResponce(200,user,token,"register succesfull")
    )


})


// login the users 

const login = asyncHandler(async(req,res)=>{

    const {email , password} = req.body

    if([email , password].some((field)=>field.trim()=="")){
        throw new ApiError(402,"All field is Required")
    }

    const user = await Users.findOne({email})

    if(!user){
        throw new ApiError(404,"user not found")
    }

    const isPasswordvalid = await user.isPasswordCorrect(password)

    if(!isPasswordvalid){
        throw new ApiError(404,"Invalid email or password")
    }

    const token = createToken(user._id)

    return res
    .status(200)
    .json(
        new ApiResponce(200,{},token,"user login successfull")
    )
})


export {
    userRegister,
    login
}