const request = require('request')

var getweather = () => {
request({
url: 'https://api.darksky.net/forecast/fe2a744f4fc60644461ed388635a0be2/37.8267,-122.4233', 
json: true
},(error, response, body) => {

if(error) {
  console.log('Unable to connect to forecast.io server!')
}  else if(response.statusCode === 404) {
  console.log('Unable to fetch the weather!')
} else if(response.statusCode === 200) {
  console.log(body.currently.temperature)
}
})
}

module.exports.getweather = getweather
