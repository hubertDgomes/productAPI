import productSchema from "../model/productSchema.js"

const productShow = async (req , res) => {
    const items = await productSchema.find({})
    res.status(400).json(items)
}

export default productShow