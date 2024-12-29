import { app } from "./app.js";
import dotenv from 'dotenv'
import {ConnectDB} from './db/index.js'

dotenv.config({
    path:'.env'
})


//Data-Base connect and Listen server 
ConnectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is listen at: ${process.env.PORT ||4000}`);
        
    })
})
.catch(()=>{
    console.log("failed to start the server");
    
})





