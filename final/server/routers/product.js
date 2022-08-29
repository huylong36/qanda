const express = require('express')
const router = express.Router()
const { createProduct } =  require('../service/apiProduct')
router.post('/', async (req, res) => {
  return createProduct(req,res)
})

module.exports = router