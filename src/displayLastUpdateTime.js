
function displayLastUpdateTime(weatherDataObject){
    const mainBox=document.getElementById('mainBox');

    const lastUpdateTimeDiv=document.createElement('div');
    lastUpdateTimeDiv.setAttribute('id', 'lastUpdateTimeDiv');

    lastUpdateTimeDiv.textContent=`Last updated: ${convertToLocalTime(weatherDataObject.lastUpdateTime)}`;
    mainBox.appendChild(lastUpdateTimeDiv);
}

function convertToLocalTime(lastUpdateTime) {
    const today=new Date();
    const hour=today.getHours();

    const convertedTime=lastUpdateTime.substring(0,11)+hour+lastUpdateTime.substring(13,16);
    
    return convertedTime;
    
    
  }
export {displayLastUpdateTime}