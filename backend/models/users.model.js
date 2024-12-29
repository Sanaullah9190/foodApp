import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt  from 'jsonwebtoken'

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        cartData:{
            type:Object,
            default:{}
        },
        // refreshToken:{
        //     type:String
        // }

    },{minimize:false}
)


userSchema.pre("save", async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}


// userSchema.methods.generateAccessToken = async function(){
    
//     return jwt.sign(
//         {
//             _id:this._id,
//             name:this.name,
//             email:this.email
//         },
//         process.env.ACCESS_TOKEN,
//         {
//             expiresIn:process.env.EXPIRY_ACCESS_TOKEN
//         }
//     )
// }


// userSchema.methods.generateRefreshToken = async function(){

//     return jwt.sign(
//         {
//             _id:this._id,
//         },
//         process.env.REFRESH_TOKEN,
//         {
//             expiresIn:process.env.EXPIRY_REFRESH_TOKEN
//         }
//     )
// }

const Users = mongoose.models.users || mongoose.model("user",userSchema)

export{Users}