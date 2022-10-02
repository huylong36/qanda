const express = require('express')
const { createQuestion, getQuestionByCategoryId } = require('../service/apiQuestion')
const router = express.Router()
router.post('/create-question', async (req, res) => {
    return createQuestion(req, res)
})
router.post('/get-question', async (req, res) => {
    return getQuestionByCategoryId(req, res)
});
module.exports = router