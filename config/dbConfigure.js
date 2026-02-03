import mongoose from "mongoose";
import 'dotenv/config'
const dbConfigure = () =>{
    mongoose.connect(process.env.MONGO)
    .then(()=> console.log("DB Connected!"))
}
export default dbConfigure
