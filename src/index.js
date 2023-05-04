import './style.css';
import { getAPIinfo } from './getAPIinfo';
import {displayWeather} from './displayWeather';
import { clearDOMelements } from './clearDOM';

const searchBtn=document.querySelector('button');

async function initialDisplay(){
    const weatherData= await getAPIinfo('Oradea');
    await displayWeather(weatherData);
}

initialDisplay();

searchBtn.addEventListener('click', async e => {
    const location=document.querySelector('input').value;
    const weatherData= await getAPIinfo(location);
    await clearDOMelements();
    await displayWeather(weatherData);
} )
   