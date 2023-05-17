import prevSliderImg from './icons/left.png';
import nextSliderImg from './icons/right.png';
import chanceOfRainIcon from './icons/rainy.png';

function generateSliders(weatherDataObject){
    const sliderContainer=document.createElement('div');
    sliderContainer.setAttribute('id', 'slider-container');

    const prevBtn=document.createElement('button');
    prevBtn.classList.add('slider-prev');

    const prevbtnImg=document.createElement('img');
    prevbtnImg.setAttribute('src', `${prevSliderImg}`);
    prevBtn.appendChild(prevbtnImg);
    sliderContainer.appendChild(prevBtn);

    const sliderImages=document.createElement('div');
    sliderImages.setAttribute('id', 'slider-images');

    const currentHour=weatherDataObject.localTime.substring(0, weatherDataObject.localTime.indexOf(':'));
    let counter=0;
    let day=0;
    let j=Number(currentHour)+1;
           
    for (let i=counter; i<=18; i++){
                                
        while ((j<24)&&(counter<18)) {
            const imgDiv=document.createElement('div');
            imgDiv.classList.add('imgDiv');

            const hourDiv=document.createElement('div');
            hourDiv.textContent=`${j}:00`;
            imgDiv.appendChild(hourDiv);

            const weatherIcon = require(`./icons/weather/64x64/${weatherDataObject.is_day}/${weatherDataObject[`hourlyForecast${day}`][j]['condition']['icon'].slice(-7)}`);
            const img=document.createElement('img');
            img.setAttribute('src', `${weatherIcon}`);
            img.setAttribute('alt', `Slide ${i}`);
            imgDiv.appendChild(img);

            const temperatureDiv=document.createElement('div');
            if (main.classList.contains('celsius'))
                    temperatureDiv.textContent=`${weatherDataObject[`hourlyForecast${day}`][j]['temp_c']}\xB0 C`;
                    else temperatureDiv.textContent=`${weatherDataObject[`hourlyForecast${day}`][j]['temp_f']}\xB0 F`;
            imgDiv.appendChild(temperatureDiv);

            const chanceOfRainDiv=document.createElement('div');
            chanceOfRainDiv.setAttribute('id','chanceOfRainDiv');

            const icon=document.createElement('img');
            icon.setAttribute('src', chanceOfRainIcon);

            const number=document.createElement('div');
            number.textContent=`${weatherDataObject[`hourlyForecast${day}`][j]['chance_of_rain']}%`;
            
            chanceOfRainDiv.appendChild(icon);
            chanceOfRainDiv.appendChild(number);

            imgDiv.appendChild(chanceOfRainDiv);

            sliderImages.appendChild(imgDiv);
            counter++;
            j++}
        j=0;
        day++;
        }       
    
    sliderContainer.appendChild(sliderImages);

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

    mainBox.appendChild(sliderContainer);
    }

export {generateSliders}