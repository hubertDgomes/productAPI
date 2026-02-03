import productSchema from "../model/productSchema.js"

const productSend = async (req , res) =>{
    const {title , description} = req.body
    if(!title){
      return  res.status(400).json({Error : "Enter the title!"})
    }
    if(!description){
      return  res.status(400).json({Error : "Enter the Description!"})
    }
    const duplicatePro = await productSchema.findOne({title})
    if(duplicatePro){
        return res.status(400).json({Error : "This product already been shortlisted in databases"})
    }
    const product = productSchema({
        title,
        description
    })
    product.save()
    res.status(200).json({Msg : "Data has been submitted!"})
}

export default productSend