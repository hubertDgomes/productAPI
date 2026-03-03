import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";


cloudinary.config({ 
        cloud_name: 'dwvtzpyqr', 
        api_key: '649678971784747', 
        api_secret: 'owCSUlZOMyPM3Q2O7duqT8sTb3Q'
    });

const imageUpload = async (filename)=> {
    const result = await cloudinary.uploader.upload(filename)
    fs.unlinkSync(filename)
    return result;
}

export default imageUpload