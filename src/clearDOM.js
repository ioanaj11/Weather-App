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
    
    mainTemperature.removeChild(changeCorFBtn);
}

export {clearDOMelements}