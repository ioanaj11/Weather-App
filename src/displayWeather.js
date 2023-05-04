import temperatureIcon from './icons/thermometer.png';
import humidityIcon from './icons/humidity.png';
import chanceOfRainIcon from './icons/rainy.png';
import windSpeedIcon from './icons/wind.png';

function displayWeather(weatherDataObject){
    //background
    const main=document.getElementById('main');
    main.classList.remove('class');

    const temperature=document.getElementById('temperature');
    const description=document.getElementById('description');
    const place=document.getElementById('place');
    const situated=document.getElementById('situated');
    const weatherIconImg=document.getElementById('weatherIconImg');
    const feelsLike=document.getElementById('feelsLike');
    const humidity=document.getElementById('humidity');
    const chanceOfRain=document.getElementById('chanceOfRain');
    const windSpeed=document.getElementById('windSpeed');

    switch (weatherDataObject.text){
        case 'error':
            main.setAttribute('class', 'error');
            temperature.textContent='';
            description.textContent='';
            place.textContent='';
            situated.textContent='';
            weatherIconImg.removeAttribute('src');
            feelsLike.textContent='';
            humidity.textContent='';
            chanceOfRain.textContent='';
            windSpeed.textContent='';
            return;
        case 'Clear': 
            main.setAttribute('class', 'clear');
            break;
        case 'Cloudy':
        case 'Overcast':
            main.setAttribute('class', 'cloudy');
            break;
        case 'Sunny':
            main.setAttribute('class', 'sunny');
            break;
        case 'Partly cloudy':
            main.setAttribute('class', 'partlyCloudy');
            break;
        case 'Overcast':
            main.setAttribute('class', 'cloudy');
            break;
        case 'Light rain':
        case 'Patchy rain possible':
        case 'Patchy light drizzle':
        case 'Light drizzle':
        case 'Patchy light rain':
        case 'Moderate rain at times':
        case 'Moderate rain':
        case 'Light rain shower':
            main.setAttribute('class', 'rainy');
            break;
        case 'Mist':
        case 'Fog':
        case 'Freezing fog':
            main.setAttribute('class', 'mist');
            break;
        case 'Patchy snow possible':
        case 'Blowing snow':
        case 'Blizzard':
        case 'Patchy light snow':
        case 'Light snow':
        case 'Patchy moderate snow':
        case 'Moderate snow':
        case 'Patchy heavy snow':
        case 'Heavy snow':
        case 'Light snow showers':
        case 'Moderate or heavy snow showers':
            main.setAttribute('class', 'snowy');
            break;
        case 'Patchy sleet possible':
        case 'Light sleet':
        case 'Moderate or heavy sleet':
        case 'Light sleet showers':
        case 'Moderate or heavy sleet showers':
            main.setAttribute('class','sleet');
            break;
        case 'Thundery outbreaks possible':
        case 'Patchy light rain with thunder':
        case 'Moderate or heavy rain with thunder':
        case 'Patchy light snow with thunder':
        case 'Moderate or heavy snow with thunder':
            main.setAttribute('class', 'thunder');
            break;
        case 'Heavy rain at times':
        case 'Heavy rain':
        case 'Moderate or heavy rain shower':
        case 'Torrential rain shower':
            main.setAttribute('class', 'heavyRain');
            break;
        default:
            main.setAttribute('class', 'default');
    }
    
    //temperature
    temperature.textContent=`${weatherDataObject.temp_c}\xB0 C`;

    //description
    description.textContent=`${weatherDataObject.text}`;

    //location
    place.textContent=`${weatherDataObject.place},`;
    situated.textContent=`${weatherDataObject.region} ${weatherDataObject.country}`;

    //weather Icon
    weatherIconImg.setAttribute('src', `../src/icons/weather/64x64/${weatherDataObject.is_day}/${weatherDataObject.icon.slice(-7)}`);

    //secondary values
    const secondaryInfo=[
        {'variable': feelsLike,
         'text': 'Feels like:',
         'value':`${weatherDataObject.feelslike_c}\xB0 C`,
         'icon': temperatureIcon},
        {'variable': humidity,
         'text': 'Humidity:',
         'value': `${weatherDataObject.humidity}%`,  
         'icon': humidityIcon},
        {'variable': chanceOfRain,
         'text': 'Chance of rain:',
         'value': `${weatherDataObject.chanceOfRain}%`,
         'icon': chanceOfRainIcon},
        {'variable': windSpeed,
         'text': 'Wind speed',
         'value': `${weatherDataObject.wind_kph} kph`,
         'icon': windSpeedIcon} ];

    for(let i=0; i<=3; i++){
        const icon=document.createElement('img');

        icon.setAttribute('src', `${secondaryInfo[i].icon}`);
        secondaryInfo[i].variable.appendChild(icon);

        const secondaryInfoDetails=document.createElement('div');

        const textDiv=document.createElement('div');

        textDiv.textContent=`${secondaryInfo[i].text}`;
        secondaryInfoDetails.appendChild(textDiv);

        const valueDiv=document.createElement('div');

        valueDiv.textContent=`${secondaryInfo[i].value}`;
        secondaryInfoDetails.appendChild(valueDiv);

        secondaryInfo[i].variable.appendChild(secondaryInfoDetails);
    };
   
}

export {displayWeather}