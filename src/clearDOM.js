function clearDOMelements(){    
    const mainBox=document.getElementById('mainBox');
    const secondaryInfoDivChildren=document.querySelectorAll('#secondaryInfo>*');
    secondaryInfoDivChildren.forEach(childDiv=> clear(childDiv));
   
   function clear(divElement){
    while(divElement.firstChild) {
        divElement.removeChild(divElement.lastChild);
     }
    }

    const mainTemperature=document.getElementById('mainTemperature');
    const changeCorFBtn=document.getElementById('changeCorFBtn');

    if (changeCorFBtn != null ) mainTemperature.removeChild(changeCorFBtn);

    const forecastBtnsDiv=document.getElementById('forecastBtnsDiv');
    if (forecastBtnsDiv !=null)       
        mainBox.removeChild(forecastBtnsDiv);

    const sliderContainer=document.getElementById('slider-container');
    if (sliderContainer !=null)
        mainBox.removeChild(sliderContainer);
   
    const lastUpdateTimeDiv=document.getElementById('lastUpdateTimeDiv');
    if (lastUpdateTimeDiv !=null)
        mainBox.removeChild(lastUpdateTimeDiv);
}

export {clearDOMelements}