import './style.css';
import { getAPIinfo } from './getAPIinfo';
import {displayWeather} from './displayWeather';
import { clearDOMelements } from './clearDOM';

const searchBtn=document.querySelector('button');
const locationInput=document.querySelector('input');

async function initialDisplay(){
    const weatherData= await getAPIinfo('Oradea');
    await displayWeather(weatherData);
}

initialDisplay();

searchBtn.addEventListener('click', async e => {
    const weatherData= await getAPIinfo(locationInput.value);
    await clearDOMelements();
    await displayWeather(weatherData);
} )

locationInput.addEventListener('keydown', async e => {
    if (e.key === "Enter")
        {e.preventDefault();
        const weatherData= await getAPIinfo(locationInput.value);
        await clearDOMelements();
        await displayWeather(weatherData);}
} )