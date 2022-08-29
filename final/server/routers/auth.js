const express = require('express')
const { register,login } =  require('../service/apiAuth')
const router = express.Router()

router.post('/register', async (req, res) => {
  return register(req,res)
})
router.post('/login', async (req, res) => {
  return login(req,res)
})

module.exports = router