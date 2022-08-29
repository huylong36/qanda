const Blog = require("../models/Blog");
const createBlog = async (req, res) => {
  try {
    const { username, media, desc, react, author, categoryId } = req.body;
    const newBlog = new Blog({
      username,
      media,
      desc,
      react,
      author,
      categoryId,
    });
    await newBlog.save();
    return res.json({
      success: true,
      message: "Tạo blog thành công !",
      newBlog,
    });
  } catch (error) {
    return res.json({ success: false, message: "Tạo blog thất bại !" });
  }
};
const updateBlog = async (req, res) => {
  try {
    const { _id, username, media, desc, react, author, categoryId } = req.body;
    const data = await Blog.findByIdAndUpdate(
      _id,
      { $set: { username, media, desc, react, author, categoryId } },
      { new: true }
    );
    return res.json({ success: true, message: "Update thành công !", data });
  } catch (error) {
    return res.json({ success: false, message: "Update thất bại !" });
  }
};
const deleteBlog = async (req, res) => {
  try {
    const _id = req.body;
    const data = await Blog.findByIdAndDelete(_id);
    return res.json({ success: true, message: "Xoá thành công !", data });
  } catch (error) {
    return res.json({ success: false, message: "Xoá thất bại !" });
  }
};
const getBlog = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.json({ success: true, message: "get product category okee", blog });
  } catch (error) {}
};
module.exports = { createBlog, updateBlog, deleteBlog, getBlog };
