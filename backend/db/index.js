import mongoose from 'mongoose'
import {DB_NAME} from '../constant.js'

const ConnectDB = async ()=>{

    try {
        const connection = await  mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
        console.log("DataBase is Connected");
        console.log('connection intase is: ',connection.connection.host);
        
        
    } catch (error) {
        console.log("Failed to Connect the dataBase");
        process.exit()
        
    }
}

export{ConnectDB}