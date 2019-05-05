const express = require('express')
const createByGoogle = require('../model/user/createByGoogle')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('login')
})

router.post('/google', async (req, res) => {
    // TODO: Create user table
    //createByGoogle(userid)
    res.send('開發中')
})

module.exports = router
