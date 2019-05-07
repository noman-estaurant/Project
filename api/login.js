const express = require('express')
const createByGoogle = require('../model/user/createByGoogle')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('login')
})

router.post('/google', async (req, res) => {
    try {
      const jwt = await createByGoogle(req.body.token)
      res.status(200).send({
        status: 'successful',
        token: jwt
      })
    } catch(e) {
      res.status(500).send({
        status: 'error',
      })
    }
})

module.exports = router
