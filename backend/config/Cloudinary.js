import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config({
    path:'.env'
})


cloudinary.config({ 
    cloud_name: process.env.CLOUDE_NAME, 
    api_key: process.env.CLOUDE_API_KEY, 
    api_secret: process.env.CLOUDE_SECRET_KEY // Click 'View API Keys' above to copy your API secret
});

const cloudinaryUpload = async (localpath)=>{
    
    try {
        
        if(!localpath) return null;
        // console.log(localpath)

        const responce = await cloudinary.uploader.upload(localpath,{
            resource_type:"auto"
        });

        fs.unlinkSync(localpath);// upload file is deleted
        // console.log(responce.url);
        return responce;
    } catch (error) {

        fs.unlinkSync(localpath) // upload file is deleted
        return null;
    }

}

export {cloudinaryUpload}
