const express = require('express')
const router = express.Router()
const { createBlog , updateBlog , deleteBlog ,getBlog} =  require('../service/apiBlog') 
router.post('/', async (req, res) => {
  return createBlog(req,res)
})
router.post('/update', async (req, res) => {
  return updateBlog(req,res)
})
router.post('/delete', async (req, res) => {
  return deleteBlog(req,res)
})
router.get('/get-blog', async (req, res) => {
  return getBlog(req,res)
})
module.exports = router