import chanceOfRainIcon from './icons/rainy.png';

function generateSliders(weatherDataObject, hourlyOrDaily){
  const sliderContainer=document.getElementById('slider-container');
  const sliderImages=document.createElement('div');
  sliderImages.setAttribute('id', 'slider-images');
  sliderContainer.appendChild(sliderImages);
    
    switch (hourlyOrDaily){
        case "hourly":
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
           break;

          case "daily":
              const currentDay=weatherDataObject['currentDay'];
              console.log(currentDay);
        }
    
    const nextBtn=document.querySelector('slider-next');
    if (nextBtn != null)
        sliderContainer.insertBefore(sliderImages, nextBtn);

    mainBox.appendChild(sliderContainer);
   
    }

export {generateSliders}