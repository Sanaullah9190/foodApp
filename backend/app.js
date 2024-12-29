import express from 'express'
const app = express()
import cores from 'cors'
import cookieParser from 'cookie-parser'


// middlewares
app.use(cores({
    origin:process.env.CORS,
    credentials:true
}))

app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({extended:true, limit:"50mb"}))
app.use(express.static("uploads"))
app.use(cookieParser())

// router
import foodRouter from './routers/food.routes.js'
import userRouter from './routers/users.routes.js'
import cartRouter from './routers/cart.routes.js'
import OrderRoute from './routers/order.routes.js'


app.use('/api/food',foodRouter)
app.use('/api/users',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order/',OrderRoute)

export {app}