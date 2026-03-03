import productSchema from "../model/productSchema.js";

const productDel = (req ,res) => {
    const {id} = req.params;
    productSchema.findByIdAndDelete(id)
    .then(() => res.send("Deleted!!"))
}

export default productDel