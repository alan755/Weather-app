const request = require('request')
const yargs = require('yargs')

const argv = yargs
  .options({
    a:{
      demand: true,
      alias: 'address',
      describe: 'Address for fetching weather',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv
console.log(argv)
var encodedaddr = encodeURIComponent(argv.address)
console.log(encodedaddr)

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=india' + encodedaddr,
  json: true
}, (error,response, body) => {
 //console.log(JSON.stringify(body, undefined, 2))
  console.log('Address: ',body.results[0].formatted_address)
  console.log('Latitutde: ',body.results[0].geometry.location.lat)
  console.log('Longitude: ',body.results[0].geometry.location.lng)
})
