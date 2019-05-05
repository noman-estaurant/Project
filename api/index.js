const express = require('express')
const router = express.Router()

const restaurant = require('./restaurant')
const login = require('./login')

router.use('/restaurant', restaurant)

router.use('/login', login)

module.exports = router