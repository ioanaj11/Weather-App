import { backgroundChanger } from './backgroundChanger';
import { displaySecondaryCurrentWeather } from './displaySecondaryCurrentWeather';
import { displayForecast } from './displayForecast';
import { generateCorFBtn } from './generateCorFBtn';
import { displayLastUpdateTime } from './displayLastUpdateTime';

    const temperature=document.getElementById('temperature');
    const description=document.getElementById('description');
    const place=document.getElementById('place');
    const situated=document.getElementById('situated');
    const weatherIconImg=document.getElementById('weatherIconImg');
    
function displayWeather(weatherDataObject){
    //background
    if (backgroundChanger(weatherDataObject) === 'error') return;
                 
    //temperature
    if (main.classList.contains('celsius'))
        temperature.textContent=`${weatherDataObject.temp_c}\xB0 C`;
        else temperature.textContent=`${weatherDataObject.temp_f}\xB0 F`;

    //Fahrenheit/Celsius option Button
    generateCorFBtn(weatherDataObject);

    //description
    description.textContent=`${weatherDataObject.text}`;

    //location
    place.textContent=`${weatherDataObject.place},`;
    situated.textContent=`${weatherDataObject.region} ${weatherDataObject.country}`;

    //weather Icon
    const weatherIcon = require(`./icons/weather/64x64/${weatherDataObject.is_day}/${weatherDataObject.icon}`);
    weatherIconImg.setAttribute('src', `${weatherIcon}`);

    //secondary values
    displaySecondaryCurrentWeather(weatherDataObject);
    
    //daily/hourly forecast
    displayForecast(weatherDataObject);

    //Last update
    displayLastUpdateTime(weatherDataObject);
}

export {displayWeather}