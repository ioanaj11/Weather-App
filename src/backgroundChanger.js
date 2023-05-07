const temperature=document.getElementById('temperature');
const description=document.getElementById('description');
const place=document.getElementById('place');
const situated=document.getElementById('situated');
const weatherIconImg=document.getElementById('weatherIconImg');
const feelsLike=document.getElementById('feelsLike');
const humidity=document.getElementById('humidity');
const chanceOfRain=document.getElementById('chanceOfRain');
const windSpeed=document.getElementById('windSpeed');

function backgroundChanger(weatherDataObject){
    let main=document.getElementById('main');
    
    if (main.classList.contains('celsius')){
        main.removeAttribute('class');
        main.classList.add('celsius');
         }
         else{
            main.removeAttribute('class');
            main.classList.add('fahrenheit')
         };

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
            return('error');
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
}

export {backgroundChanger}