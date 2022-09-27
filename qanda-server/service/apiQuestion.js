const Question = require("../models/Question");

const createQuestion = async (req, res) => {
    const { name, content, slug, categoryId } = req.body;
    try {
        const newQuestion = new Question({
            name,
            content,
            slug,
            category: categoryId,
        });
        await newQuestion.save();
        res.json({
            success: true,
            message: "Succses",
            newQuestion,
        });
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" });
    }
};
module.exports = { createQuestion };