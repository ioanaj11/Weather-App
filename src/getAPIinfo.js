function getAPIinfo(location) {
    return fetch(`https://api.weatherapi.com/v1/forecast.json?key=8425552e72174ff8b69160208230504&q=${location}&days=3&aqi=no&alerts=no`, {mode: 'cors'})

      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response);
        const weatherData = {
          'icon': response.current.condition.icon.slice(-7),
          'text': response.current.condition.text,
          'temp_c': response.current.temp_c,
          'temp_f': response.current.temp_f,
          'feelslike_c': response.current.feelslike_c,
          'feelslike_f': response.current.feelslike_f,
          'wind_kph': response.current.wind_kph,
          'wind_mph': response.current.wind_mph,
          'place': response.location.name,
          'region': response.location.region,
          'country': response.location.country,
          'is_day': response.current.is_day,
          'humidity': response.current.humidity,
          'chanceOfRain': response.forecast.forecastday[0].day.daily_chance_of_rain,
          'hourlyForecast0': response.forecast.forecastday[0].hour,
          'hourlyForecast1': response.forecast.forecastday[1].hour,
          'localTime': response.location.localtime.slice(-5),
          'currentDay': response.location.localtime.slice(0,10),
          'lastUpdateTime': response.current.last_updated
        };
        return weatherData;
      })
      .catch(function(error) {
        console.log(error);
        const weatherData={
          'text': 'error'
        }
        return weatherData;
      });
  }

export {getAPIinfo}