const { OAuth2Client } = require('google-auth-library')
const connection = require('../../database/mysql')

const clientId = require('../../setting/config').clientId
const client = new OAuth2Client(clientId)

const checkExist = id => {
  connection.query(
    `SELECT * FROM user_google WHERE google_id = ${id}`,
    (err, rows, fields) => {
      if (rows.length > 0)
        return true
      return false
    }
  )
}

module.exports = idToken => {
  return new Promise(async (resolve, reject) => {
    const ticket = await client.verifyIdToken({
      idToken: req.body['token'],
      audience: clientId
    })
    const payload = ticket.getPayload()
    const userid = payload['sub']
    if (checkExist(userid)) {

    } else {
      
    }
  })
}
