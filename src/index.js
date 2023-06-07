import './style.css';
import { getAPIinfo } from './getAPIinfo';
import {displayWeather} from './displayWeather';
import { clearDOMelements } from './clearDOM';

const searchBtn=document.querySelector('button');
const locationInput=document.querySelector('input');
const locationDropDownMenu=document.getElementById('locationDropDownMenu');
const presetLocationsDiv=document.getElementById('presetLocationsDiv');

async function initialDisplay(){
    const weatherData= await getAPIinfo('Oradea');
    await displayWeather(weatherData);
}

initialDisplay();

locationDropDownMenu.addEventListener('mouseover', e=>{
    presetLocationsDiv.classList.remove('invisible');
})

locationDropDownMenu.addEventListener('mouseout', e=>{
    presetLocationsDiv.classList.add('invisible');
})

presetLocationsDiv.addEventListener('mouseover', e =>{
    presetLocationsDiv.classList.remove('invisible');
    presetLocationsDiv.addEventListener('mouseout', e =>{
         presetLocationsDiv.classList.add('invisible')
    })
})

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

for(let i=1; i<=5; i++){
    const forecastForLocation=document.getElementById(`forecastForLocation${i}`);
    forecastForLocation.addEventListener('click', async e =>{
        const weatherData=await getAPIinfo(forecastForLocation.textContent);
        await clearDOMelements();
        await displayWeather(weatherData);
    })
}