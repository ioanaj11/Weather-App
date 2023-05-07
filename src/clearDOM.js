function clearDOMelements(){    
    
    const secondaryInfoDivChildren=document.querySelectorAll('#secondaryInfo>*')
    secondaryInfoDivChildren.forEach(childDiv=> clear(childDiv));
   
   function clear(divElement){
    while(divElement.firstChild) {
        divElement.removeChild(divElement.lastChild);
     }
    }

    const mainTemperature=document.getElementById('mainTemperature');
    const changeCorFBtn=document.getElementById('changeCorFBtn');

    if (changeCorFBtn != null ) mainTemperature.removeChild(changeCorFBtn);

    if (mainBox.lastElementChild.id === 'forecastBtnsDiv')
        {const mainBox=document.getElementById('mainBox');
        mainBox.removeChild(mainBox.lastElementChild)}
}

export {clearDOMelements}