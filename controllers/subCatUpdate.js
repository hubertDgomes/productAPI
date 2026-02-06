import subCategory from "../model/subCategory.js";

const subCatUpdate = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const updateData = await subCategory.findById(id);
  updateData.title = title;
  updateData.description = description;
  await updateData.save();
  res.json({
    Massege: `The date from ${id} has been updated!`,
  });
};

export default subCatUpdate;
