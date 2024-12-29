import { ApiError } from '../config/ApiError.js'
import { ApiResponce } from '../config/ApiResponce.js'
import { asyncHandler } from '../config/asyncHandle.js'
import { OrderModels } from '../models/order.model.js'

import { Users } from '../models/users.model.js'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


// placing order 

const placeOrder = asyncHandler(async(req,res)=>{

    const frontend_url = 'http://localhost:5173'
    
    try {
        const newOrder = new OrderModels({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
    
        await newOrder.save();
        await Users.findByIdAndUpdate(req.body.userid,{cartData:{}})
    
        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100*80
            },
            quantity:item.quantity
        }))
    
        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:2*100*80
            },
            quantity:1
        })
    
        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    
        })
    
        res.json({success:true,session_url:session.url})
    } catch (error) {
        console.log("order is note placed ");
        
    }
})

// user order 

const UserOrder = asyncHandler(async(req,res)=>{

    try {
        const orders = await OrderModels.find({userId:req.body.userId})
        return res
        .status(200)
        .json(new ApiResponce(200,orders,""))
    } catch (error) {
        console.log(error);
        return res
        .status(404)
        .json(new ApiError(404,"error"))
        
    }
})

export {
    placeOrder,
    UserOrder
}