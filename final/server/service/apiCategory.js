const Category = require("../models/Category");

const createCategory = async (req, res) => {
  const { title, image, viewer, slug } = req.body;
  try {
    const newCategory = new Category({
      title,
      image,
      viewer,
      slug,
    });
    await newCategory.save();
    res.json({
      success: true,
      message: "Tạo danh mục thành công ! ",
      newCategory,
    });
  } catch (error) {
    res.json({ success: false, message: "Tạo danh mục thất bại !" });
  }
};
const updateCategory = async (req , res) => {
    try {
        const { _id, title , image , viewer , slug } = req.body;
        const data = await Category.findByIdAndUpdate(
          _id,
          { $set: {title, image, viewer, slug} },
          { new: true }
        );
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({msg : error.message})
    }
};
const deleteCategory = async (req , res) =>{
    try {
        const _id = req.body
        const data = await Category.findByIdAndDelete(_id)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({msg : error.message})
    }
}
const getCategory = async (req , res) =>{
  try {
    const category = await Category.find()
    res.json({ success: true, message: "get product category okee", category });
  } catch (error) {
    
  }
}
module.exports = { createCategory , updateCategory , deleteCategory  , getCategory};
