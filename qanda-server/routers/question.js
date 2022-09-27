const express = require('express')
const { createQuestion } = require('../service/apiQuestion')
const router = express.Router()
router.post('/create-question', async (req, res) => {
    return createQuestion(req, res)
})
module.exports = router