const Category = require("../models/Category");

const createCategory = async (req, res) => {
    const { name, viewer, slug } = req.body;
    try {
        const newCategory = new Category({
            name,
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
        console.log(error)
        res.json({ success: false, message: "Tạo danh mục thất bại !" });
    }
};
const getCategory = async (req, res) => {
    try {
        const category = await Category.find()
        res.json({ success: true, message: "get product category okee", category });
    } catch (error) {

    }
}
module.exports = { createCategory, getCategory };
