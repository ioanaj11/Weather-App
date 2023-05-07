import { clearDOMelements } from "./clearDOM";
import { displayWeather } from "./displayWeather";

const mainTemperature=document.getElementById('mainTemperature');
const weatherIconDiv=document.getElementById('weatherIcon');
  
 function generateCorFBtn(weatherDataObject){   
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

 }

 export {generateCorFBtn}