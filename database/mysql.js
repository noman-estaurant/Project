const mysql = require('mysql')
const config = require('../setting/db/config')

const connection = mysql.createConnection(config.mysql)

module.exports = connection
