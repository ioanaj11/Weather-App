
function displayLastUpdateTime(weatherDataObject){
    const mainBox=document.getElementById('mainBox');

    const lastUpdateTimeDiv=document.createElement('div');
    lastUpdateTimeDiv.setAttribute('id', 'lastUpdateTimeDiv');

    lastUpdateTimeDiv.textContent=`Last updated: ${weatherDataObject.lastUpdateTime}`;
    mainBox.appendChild(lastUpdateTimeDiv);
}

export {displayLastUpdateTime}