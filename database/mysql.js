const mysql = require('mysql')
const config = require('../setting/db/config')

const connection = mysql.createConnection(config.mysql)

connection.connect(err => {
  if (err) {
    console.log(err)
    process.exit()
  }
})
