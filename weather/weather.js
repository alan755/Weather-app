const request = require('request')

var getweather = (lat, lng, callback) => {
request({
url: 'https://api.darksky.net/forecast/fe2a744f4fc60644461ed388635a0be2/' + lat + ',' + lng, 
json: true
},(error, response, body) => {

if(error) {
  callback('Unable to connect to forecast.io server!')
}  else if(response.statusCode === 404) {
  callbacklog('Unable to fetch the weather!')
} else if(response.statusCode === 200) {
  callback(undefined, {
    temperature: body.currently.temperature,
    apparenttemperature: body.currently.apparentTemperature
  })
}
})
}

module.exports.getweather = getweather
