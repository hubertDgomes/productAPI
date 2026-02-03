import userSchema from "../model/userSchema.js";
import bcrypt from "bcrypt";
import crypto from "crypto"
import emailVal from "../helpers/emailVal.js";


const sendData = async (req, res) => {
  const { name, email, password } = req.body;
  if(!name){
    return res.json({Error : "Name requred"})
  }
  if(!email){
    return res.json({Error : "Email requred"})
  }
  if(!password){
    return res.json({Error : "Password requred"})
  }
  if(!emailVal(email)){
    return res.json({Error : "Invalid Email Format"})
  }

  const duplicateUsers = await userSchema.findOne({email})

  if(duplicateUsers){
    return res.json({Error : "User already existes. Try to Login!"})
  }

  const otp = crypto.randomInt(100000 , 999999).toString()

  const expOtp = new Date (Date.now() + 10*60*1000)
  

  bcrypt.hash(password, 10).then(function (hash) {
    const user = userSchema({
      name,
      email,
      password: hash,
      otp : otp,
      expOtp : expOtp
    });
    user.save();
    res.status(200).json({ Massege: "Data Has Been Submited!" });
  });
};

export default sendData;
