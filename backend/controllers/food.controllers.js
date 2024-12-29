import { Food } from "../models/food.model.js";
import {ApiResponce} from '../config/ApiResponce.js'
import {ApiError} from '../config/ApiError.js'
import {asyncHandler} from "../config/asyncHandle.js"
import {cloudinaryUpload} from '../config/Cloudinary.js'



const addFood = asyncHandler( async (req,res) =>{
    
    const {name , description ,price , category} = req.body
    
    // console.log(name,description,price,category);
    
    

    if(
        [name , description ,price , category].some((field)=>field?.trim()=="")
    ){
        throw new ApiError(404,"All fields are Required")
    }

    const localImagePath = req.file?.path
    
    // console.log(localImagePath);
    

    if(!localImagePath){
        throw new ApiError(404,"image is required")
    }

    const image = await cloudinaryUpload(localImagePath)
    // console.log(image);

    if(!image){
        throw new ApiError(404,"Image is missing")
    }

    const food = await Food.create(
        {
            name,
            description,
            price,
            image:image?.url,
            category
        }
    )

    return res
    .status(200)
    .json(
        new ApiResponce(200,food,{},"food is added successfully")
    )
    
})

const getFoodList = asyncHandler(async(req,res)=>{
    
    const foodList = await Food.find({})

    return res
    .status(200)
    .json(
        new ApiResponce(200,foodList,{},"All food list get succesfully")
    )
    
})

const deletOneFood = asyncHandler(async(req,res)=>{

    const {id} = req.body
    // console.log(id);
    
    
    if(!id){
        throw new ApiError(404,"please Enter the id")
    }

    await Food.findOneAndDelete(id)

    return res
    .status(200)
    .json(
        new ApiResponce(200,[],{},"Food is deleted")
    )
})




export {
    addFood,
    getFoodList,
    deletOneFood,
}