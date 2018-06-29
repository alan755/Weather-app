
const yargs = require('yargs')

const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js')

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


geocode.geocodeaddr(argv.address, (errormessage, results) => {
  if(errormessage) {
    console.log(errormessage)
  } else {
    console.log('Place : ' + results.address)
    console.log('Latitude : ' + results.latitude)
    console.log('Longitude ' + results.longitude)
    weather.getweather(results.latitude, results.longitude, (errormessage, weatherresult) => {
      if(errormessage) {
        console.log(errormessage)
      } else {
        console.log('\nCurrent temperature: ' + weatherresult.temperature)
        console.log('Apparent Temperature: ' + weatherresult.apparenttemperature)
      }
    })
  }
})







