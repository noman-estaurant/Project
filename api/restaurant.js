const express = require('express')
const router = express.Router()
const getAllRestaurant = require('../model/restaurant/getAllRestaurant')

router.get('/', (req, res) => {
  getAllRestaurant()
    .then(data => {
      res.send({
        "restaurant": data
      })
    })
})

module.exports = router
