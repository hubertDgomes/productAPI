import productSchema from "../model/productSchema.js"

const productSend = async (req , res) =>{
    const {name , description} = req.body
    if(!name){
      return  res.status(400).json({Error : "Enter the name!"})
    }
    if(!description){
      return  res.status(400).json({Error : "Enter the Description!"})
    }
    const duplicatePro = await productSchema.findOne({name})
    if(duplicatePro){
        return res.status(400).json({Error : "This product already been shortlisted in databases"})
    }
    const product = productSchema({
        name,
        description,
    })
    product.save()
    res.status(200).json({Msg : "Data has been submitted!"})
}

export default productSend