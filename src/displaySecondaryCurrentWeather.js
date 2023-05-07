import temperatureIcon from './icons/thermometer.png';
import humidityIcon from './icons/humidity.png';
import chanceOfRainIcon from './icons/rainy.png';
import windSpeedIcon from './icons/wind.png';

const temperature=document.getElementById('temperature');
const description=document.getElementById('description');
const place=document.getElementById('place');
const situated=document.getElementById('situated');
const weatherIconImg=document.getElementById('weatherIconImg');
const feelsLike=document.getElementById('feelsLike');
const humidity=document.getElementById('humidity');
const chanceOfRain=document.getElementById('chanceOfRain');
const windSpeed=document.getElementById('windSpeed');
const mainTemperature=document.getElementById('mainTemperature');
const weatherIconDiv=document.getElementById('weatherIcon');

function displaySecondaryCurrentWeather(weatherDataObject){
    
    function units(weatherDataObject){
        if (main.classList.contains('celsius')) return `${weatherDataObject.feelslike_c}\xB0 C`;
           else return `${weatherDataObject.feelslike_f}\xB0 F`
        };

        const secondaryInfo=[
            {'variable': feelsLike,
             'text': 'Feels like:',
             'value': units(weatherDataObject),
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

export {displaySecondaryCurrentWeather}