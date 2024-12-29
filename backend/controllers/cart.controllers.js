import { ApiError} from '../config/ApiError.js'
import { ApiResponce } from '../config/ApiResponce.js'
import { asyncHandler } from '../config/asyncHandle.js'
import {Users} from '../models/users.model.js'


// Add the food to the cart
const AddCartItem = asyncHandler(async(req,res)=>{
    try {
        let userData = await Users.findById(req.body.userId)

        let cartData = await userData.cartData;

        if(!cartData[req.body.itemId]){

            cartData[req.body.itemId] = 1

        }else{
            cartData[req.body.itemId] += 1
        }

        await Users.findByIdAndUpdate(req.body.userId,{cartData})

        return res
        .status(200)
        .json(
            new ApiResponce(200,"Food is added to cart")
        )


    } catch (error) {
        throw new ApiError(404,{},"food is not added to cart")
    }
})

// remove the food from the cart

const removeCartItem = asyncHandler(async(req,res)=>{

    let userData = await Users.findById(req.body.userId)

    let cartData = await userData.cartData

    if(cartData[req.body.itemId]>0){
        cartData[req.body.itemId] -= 1
    }

    await Users.findByIdAndUpdate(req.body.userId,{cartData})

    return res
    .status(200)
    .json(
        new ApiResponce(200,[],{},"food is remove from cart")
    )

})

// get all the food in the cart

const getCartItem = asyncHandler(async(req,res)=>{
    let userData = await Users.findById(req.body.userId);
    let cartData = await userData.cartData

    return res
    .status(200)
    .json(
        new ApiResponce(200,cartData,{},"cart data fatch succesfull")
    )
})


export {
    AddCartItem,
    removeCartItem,
    getCartItem
}