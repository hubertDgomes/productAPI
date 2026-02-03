import userSchema from "../model/userSchema.js"

const showData = async (req ,res) =>{
    const users = await userSchema.find({})
    res.json(users)
}

export default showData