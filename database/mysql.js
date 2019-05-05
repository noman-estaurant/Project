const mysql = require('mysql')
const config = require('../setting/config')

const connection = mysql.createConnection(config.mysql)

module.exports = connection
