const Product = require("../models/Product")

const createProduct = async (req,res) => {
    const {title, description,color,price,size,image} = req.body
    try {
        const newProduct = new Product({
            title,
            description,
            color:color,
            price,
            size:size,
            image
        })
        await newProduct.save();
        res.json({ success: true, message: "Tạo sản phẩm thành công !", newProduct });
    } catch (error) {
        res.json({ success: false, message: "Tạo sản phẩm thất bại !" });
    }
}
module.exports = {createProduct}