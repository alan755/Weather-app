
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
/*
console.log(argv)
geocode.geocodeaddr(argv.address, (errormessage, results) => {
  if(errormessage) {
    console.log(errormessage)
  } else {
    console.log(JSON.stringify(results,undefined,2))
  }
})
*/

weather.getweather()




