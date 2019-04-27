const express = require('express')
const axios = require('axios')
const router = express.Router()
const getAllRestaurant = require('../model/restaurant/getAllRestaurant')

router.post('/', async (req, res) => {
  const lat = req.body['userPosition_lat']
  const lng = req.body['userPosition_lng']
  if (lat && lng) {
    try {
      const restaurant = await getAllRestaurant(lat, lng)
      res.send({'restaurant': restaurant})
    } catch(e) {
      res.send(e)
    }
  } else {
    res.send({'error': 'Parameters are invalid'})
  }
})

module.exports = router
