const connection = require('../../database/mysql')

// connection.query('DROP TABLE restaurant')

// connection.query('CREATE TABLE IF NOT EXISTS restaurant (id INT(10) PRIMARY KEY AUTO_INCREMENT, name VARCHAR(30) NOT NULL, lat FLOAT(6, 3) NOT NULL, lng FLOAT(5, 3) NOT NULL)')

const getAllRestaurant =  () => {
  return new Promise((resolve, reject) => {
    connection.query(
      'SELECT name, address, lat, lng FROM restaurant',
      (err, rows, fields) => {
        if (err) reject(err)
        else resolve(rows)
      }
    )
  })
}

module.exports = getAllRestaurant
