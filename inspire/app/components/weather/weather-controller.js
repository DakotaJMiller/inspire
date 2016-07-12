(function (){
	
	var wc = this;
	var NewWeatherService = new WeatherService();
	
	NewWeatherService.getWeather(function(res){
		
		$('#weather').append('<p>' + ((res.main.temp - 273) *  1.8 + 32).toFixed(1) + '°F' + "</p>")
		

		//What can you do with this weather object?
	})
	
	
	
	
	
}())
