const request = require('request')

var geocodeaddr = (address, callback) => {

var encodedaddr = encodeURIComponent(address)
console.log(encodedaddr)

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=india' + encodedaddr,
  json: true
}, (error,response, body) => {
  if (error) {
    callback('Unalbe to connect to google server!')
  } else if (body.status === 'ZERO_RESULTS') {
    callback('Address is not found!')
  } else if(body.status === 'OK') {
    callback(undefined,{
      address: body.results[0].formatted_address,
      lattitude: body.results[0].geometry.location.lat,
      longitude: body.results[0].geometry.location.lng
    })

  }
})

}
module.exports.geocodeaddr = geocodeaddr
