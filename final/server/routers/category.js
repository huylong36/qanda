const express = require('express')
const router = express.Router()
const { createCategory , updateCategory , deleteCategory ,getCategory} =  require('../service/apiCategory') 
router.post('/', async (req, res) => {
  return createCategory(req,res)
})
router.post('/update', async (req, res) => {
  return updateCategory(req,res)
})
router.post('/delete', async (req, res) => {
  return deleteCategory(req,res)
})
router.get('/get-category', async (req, res) => {
  return getCategory(req,res)
})
module.exports = router