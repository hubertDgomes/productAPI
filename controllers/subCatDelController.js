import subCategory from "../model/subCategory.js"

const subCatDelController = async (req , res) =>{
    const {id} = req.params
    const deleteSub = await subCategory.findByIdAndDelete(id)
    res.status(200).json({
        Massege : `${id} is Deleted`
    })
}



export default subCatDelController