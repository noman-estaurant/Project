const express = require('express')
const bodyParser = require('body-parser')

const api = require('./api/index')

const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use('/api', api)

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(17785)
