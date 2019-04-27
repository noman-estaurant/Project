const axios = require('axios')

axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=23.002,120.222&destination=23.001,120.216&key=AIzaSyDFNhbYggzOxrv_Yp86YgtvO58Jm2Lz78M`)
  .then(result => {
    console.log(result.data.routes[0].legs[0].duration.value)
  })