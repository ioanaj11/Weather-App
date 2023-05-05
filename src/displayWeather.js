import temperatureIcon from './icons/thermometer.png';
import humidityIcon from './icons/humidity.png';
import chanceOfRainIcon from './icons/rainy.png';
import windSpeedIcon from './icons/wind.png';
import { clearDOMelements } from './clearDOM';

function displayWeather(weatherDataObject){
    //background
    let main=document.getElementById('main');
    
    if (main.classList.contains('celsius')){
        main.removeAttribute('class');
        main.classList.add('celsius');
         }
         else{
            main.removeAttribute('class');
            main.classList.add('fahrenheit')
         };
         
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

    switch (weatherDataObject.text){
        case 'error':
            main.classList.add('error');
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
            main.classList.add('clear');
            break;
        case 'Cloudy':
        case 'Overcast':
            main.classList.add('cloudy');
            break;
        case 'Sunny':
            main.classList.add('sunny');
            break;
        case 'Partly cloudy':
            main.classList.add('partlyCloudy');
            break;
        case 'Overcast':
            main.classList.add('cloudy');
            break;
        case 'Light rain':
        case 'Patchy rain possible':
        case 'Patchy light drizzle':
        case 'Light drizzle':
        case 'Patchy light rain':
        case 'Moderate rain at times':
        case 'Moderate rain':
        case 'Light rain shower':
            main.classList.add('rainy');
            break;
        case 'Mist':
        case 'Fog':
        case 'Freezing fog':
            main.classList.add('mist');
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
            main.classList.add('snowy');
            break;
        case 'Patchy sleet possible':
        case 'Light sleet':
        case 'Moderate or heavy sleet':
        case 'Light sleet showers':
        case 'Moderate or heavy sleet showers':
            main.classList.add('sleet');
            break;
        case 'Thundery outbreaks possible':
        case 'Patchy light rain with thunder':
        case 'Moderate or heavy rain with thunder':
        case 'Patchy light snow with thunder':
        case 'Moderate or heavy snow with thunder':
            main.classList.add('thunder');
            break;
        case 'Heavy rain at times':
        case 'Heavy rain':
        case 'Moderate or heavy rain shower':
        case 'Torrential rain shower':
            main.classList.add('heavyRain');
            break;
        default:
            main.classList.add('default');
    }
    
    //temperature
    if (main.classList.contains('celsius'))
        temperature.textContent=`${weatherDataObject.temp_c}\xB0 C`;
        else temperature.textContent=`${weatherDataObject.temp_f}\xB0 F`;

    //Fahrenheit/Celsius option Button
    const changeCorFBtn=document.createElement('button');
    changeCorFBtn.setAttribute('id', 'changeCorFBtn');
    if (main.classList.contains('celsius'))
        changeCorFBtn.textContent='\xB0F'
        else changeCorFBtn.textContent='\xB0C';

    mainTemperature.insertBefore(changeCorFBtn, weatherIconDiv);

    changeCorFBtn.addEventListener('click', e=>{
        if(main.classList.contains('celsius')){
        main.classList.remove('celsius');
        main.classList.add('fahrenheit');
        clearDOMelements();
        displayWeather(weatherDataObject);
    }
        else {
            main.classList.remove('fahrenheit');
            main.classList.add('celsius');
            clearDOMelements();
            displayWeather(weatherDataObject); 
        }
})

    //description
    description.textContent=`${weatherDataObject.text}`;

    //location
    place.textContent=`${weatherDataObject.place},`;
    situated.textContent=`${weatherDataObject.region} ${weatherDataObject.country}`;

    //weather Icon
    const weatherIcon = require(`./icons/weather/64x64/${weatherDataObject.is_day}/${weatherDataObject.icon}`);
    weatherIconImg.setAttribute('src', `${weatherIcon}`);

    //secondary values
    function units(){
        if (main.classList.contains('celsius')) return `${weatherDataObject.feelslike_c}\xB0 C`;
           else return `${weatherDataObject.feelslike_f}\xB0 F`
        };
    
    const secondaryInfo=[
        {'variable': feelsLike,
         'text': 'Feels like:',
         'value': units(),
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