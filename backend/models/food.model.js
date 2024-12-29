import mongoose from 'mongoose'

const foodSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
    },
    {
        timestamps:true
    }
    
)


const Food = mongoose.models.food || mongoose.model("food",foodSchema)

export {Food}