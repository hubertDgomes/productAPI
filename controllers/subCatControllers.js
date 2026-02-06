import subCategory from "../model/subCategory.js"

const subCatControllers = async (req, res) =>{
    const {title , description , subCategoryId} = req.body
    if(!title){
        return res.json({Error : "Title missing!"})
    }
    if(!description){
        return res.json({Error : "Description missing!"})
    }
    const duplicateSub = await subCategory.findOne({title})
    if(duplicateSub){
         return res.json({Error : "This Subcategory is already exicted!"})
    }
    const subCat = subCategory({
        title,
        description
    })
    subCat.save()
    res.json({Msg : "Data has been submited"})
}

export default subCatControllers