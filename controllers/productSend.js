import productSchema from "../model/productSchema.js"

const productSend = async (req, res) => {
  const { name,
    description,
    category,
    image,
    price,
    size,
    color,
    ram,
    storage, } = req.body

    // console.log(req.file.filename);
    

  if (!name) {
    return res.status(400).json({ Error: "Enter the name!" })
  }
  if (!description) {
    return res.status(400).json({ Error: "Enter the Description!" })
  }
  const duplicatePro = await productSchema.findOne({ name })
  if (duplicatePro) {
    return res.status(400).json({ Error: "This product already been shortlisted in databases" })
  }
  const product = productSchema({
    name,
    description,
    category,
    image: `http://localhost:3000/uploads/${req.file.filename}`,
    price,
    size,
    color,
    ram,
    storage,
  })
  product.save()
  res.status(200).json({ Msg: "Data has been submitted!" })
}

export default productSend