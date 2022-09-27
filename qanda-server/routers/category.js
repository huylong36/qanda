const express = require('express')
const router = express.Router()
const { createCategory, getCategory } = require('../service/apiCategory')
router.post('/create-category', async (req, res) => {
    return createCategory(req, res)
})
router.get('/get-category', async (req, res) => {
    return getCategory(req, res)
})
module.exports = router