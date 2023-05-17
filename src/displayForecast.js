import { generateSliders } from "./generateSliders";

const mainBox=document.getElementById('mainBox');

function displayForecast(weatherDataObject){
    generateForecastButtons();
    generateSliders(weatherDataObject);
}

function generateForecastButtons(){
    const forecastBtnsDiv=document.createElement('div');
    forecastBtnsDiv.setAttribute('id', 'forecastBtnsDiv');
    mainBox.appendChild(forecastBtnsDiv);

    const dailyForecastBtn=document.createElement('button');
    dailyForecastBtn.textContent='Daily';
    forecastBtnsDiv.appendChild(dailyForecastBtn);

    const slashDiv=document.createElement('div');
    slashDiv.textContent='/';
    forecastBtnsDiv.appendChild(slashDiv);

    const hourlyForecastBtn=document.createElement('button');
    hourlyForecastBtn.textContent='Hourly';
    forecastBtnsDiv.appendChild(hourlyForecastBtn);
}

export {displayForecast}
