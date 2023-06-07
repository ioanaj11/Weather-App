
function displayLastUpdateTime(weatherDataObject){
    const mainBox=document.getElementById('mainBox');

    const lastUpdateTimeDiv=document.createElement('div');
    lastUpdateTimeDiv.setAttribute('id', 'lastUpdateTimeDiv');

    const today=new Date();
    const currentMinutes=today.getMinutes();
    const updatedMinutes=weatherDataObject.lastUpdateTime.slice(-2);
    let difference=0;

    if (currentMinutes>=updatedMinutes) difference=currentMinutes-updatedMinutes;
        else difference=currentMinutes+60-updatedMinutes;

    lastUpdateTimeDiv.textContent=`Last updated: ${difference} min ago`;
    mainBox.appendChild(lastUpdateTimeDiv);
}

export {displayLastUpdateTime}