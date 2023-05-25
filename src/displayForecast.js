import { generateSliders } from "./generateSliders";
import prevSliderImg from './icons/left.png';
import nextSliderImg from './icons/right.png';

const mainBox=document.getElementById('mainBox');
let sliderContainer;

function displayForecast(weatherDataObject){
    generateForecastButtons();
    generateSliderContainer();
    generateSliders(weatherDataObject, "hourly");
    generatePreviousNextButtons();
    
    const hourlyForecastBtn=document.getElementById('hourlyForecastBtn');
    const dailyForecastBtn=document.getElementById('dailyForecastBtn');

    hourlyForecastBtn.classList.add('underlined');

    hourlyForecastBtn.addEventListener('click', e=>{
        mainBox.removeChild(sliderContainer);
        generateSliderContainer();
        generateSliders(weatherDataObject, "hourly");
        generatePreviousNextButtons();
        hourlyForecastBtn.classList.add('underlined');
        dailyForecastBtn.classList.remove('underlined');
        })
  
    dailyForecastBtn.addEventListener('click', e=> {
        mainBox.removeChild(sliderContainer);
        generateSliderContainer();
        generateSliders(weatherDataObject, "daily");
        dailyForecastBtn.classList.add('underlined');
        hourlyForecastBtn.classList.remove('underlined');
        });
}

function generateForecastButtons(){
    const forecastBtnsDiv=document.createElement('div');
    forecastBtnsDiv.setAttribute('id', 'forecastBtnsDiv');
    mainBox.appendChild(forecastBtnsDiv);

    const hourlyForecastBtn=document.createElement('button');
    hourlyForecastBtn.setAttribute('id', 'hourlyForecastBtn');
    hourlyForecastBtn.textContent='Hourly';
    forecastBtnsDiv.appendChild(hourlyForecastBtn);

    const slashDiv=document.createElement('div');
    slashDiv.textContent='/';
    forecastBtnsDiv.appendChild(slashDiv);

    const dailyForecastBtn=document.createElement('button');
    dailyForecastBtn.setAttribute('id', 'dailyForecastBtn');
    dailyForecastBtn.textContent='Daily';
    forecastBtnsDiv.appendChild(dailyForecastBtn);
    }

function generatePreviousNextButtons(){
        const sliderContainer=document.getElementById('slider-container');
        const sliderImages=document.getElementById('slider-images');

        const prevBtn=document.createElement('button');
        prevBtn.classList.add('slider-prev');

        const prevbtnImg=document.createElement('img');
        prevbtnImg.setAttribute('src', `${prevSliderImg}`);
        prevBtn.appendChild(prevbtnImg);
        sliderContainer.appendChild(prevBtn);

        const nextBtn=document.createElement('button');
        nextBtn.classList.add('slider-next');

        const nextbtnImg=document.createElement('img');
        nextbtnImg.setAttribute('src', `${nextSliderImg}`);

        nextBtn.appendChild(nextbtnImg);
        sliderContainer.appendChild(nextBtn);

        prevBtn.addEventListener('click', () => {
        sliderImages.style.marginLeft = `${Math.min(parseInt(sliderImages.style.marginLeft || 0) + 92, 0)}px`;
        });

        nextBtn.addEventListener('click', () => {
        sliderImages.style.marginLeft = `${Math.max(parseInt(sliderImages.style.marginLeft || 0) - 92)}px`;
        });

        const lastUpdateTimeDiv=document.getElementById('lastUpdateTimeDiv');

        if (lastUpdateTimeDiv !=null) mainBox.insertBefore(sliderContainer, lastUpdateTimeDiv);
            else mainBox.appendChild(sliderContainer);
    }

    function generateSliderContainer(){
        sliderContainer=document.createElement('div');
        sliderContainer.setAttribute('id', 'slider-container');
        
        const lastUpdateTimeDiv=document.getElementById('lastUpdateTimeDiv');

        if (lastUpdateTimeDiv !=null) mainBox.insertBefore(sliderContainer, lastUpdateTimeDiv);
            else mainBox.appendChild(sliderContainer);
            
    }

export {displayForecast}
