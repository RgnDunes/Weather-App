const request = require('request')

const forecast =(lat,long,callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=cf53453001526524874c6a72e0ae8acf&query='+lat+','+long+'&units=m'

	request({url: url, json: true},(error, response)=>{
		if(error)
		{
			callback('Unable to connect to weather service !',undefined)
		}
		else if(response.body.error)
		{
			callback('Unable to find location !',undefined)
		}
		else
		{
			callback(undefined,	'    Weather Description : '+response.body.current.weather_descriptions[0]+'\n\t\t    Temperature : '+response.body.current.temperature+' degrees \n\t\t    Apparent Temperature : '+response.body.current.feelslike+' degrees \n\t\t    Wind Speed : '+response.body.current.wind_speed+' Kilometers/Hour')
		}
	})
}

module.exports = forecast