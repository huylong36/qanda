const Question = require("../models/Question");
const Category = require("../models/Category");
const mongoose = require("mongoose");

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
const getQuestionByCategoryId = async (req, res) => {
    const { category } = req.query;
    const questions = await Question.find({ category: category })
    try {
        res.json({ success: true, message: " okee", questions });
    } catch (error) {
        console.log(error);
    }
}




module.exports = { createQuestion, getQuestionByCategoryId };