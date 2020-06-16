const request = require('request')
const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address)
{
	return console.log(chalk.red('Please provide an address.'))
}
geocode(address,(error,data) => {
	
	if(error)
	{
		return console.log(chalk.red('Geocoding Error : '),error)
	}

	forecast(data.latitude,data.longitude,(error,forecastData) => {
		
		if(error)
		{
			return console.log(chalk.red('Forecast Error : '),error)
		}

		console.log(chalk.blue('\n------------------------------------------------------------------------------------'))
		console.log(chalk.green('\n\tLocation : '),data.location)
		console.log(chalk.green('\n\tData : '),forecastData+'\n')
		console.log(chalk.blue('------------------------------------------------------------------------------------'))
	})
})

