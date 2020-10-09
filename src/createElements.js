function createElements (element,nameClass,text=0,parent=0){
    const someElement = document.createElement(element);
    someElement.classList.add(nameClass);
    if(typeof text=='string'){
        someElement.textContent=text;
    }
    if(typeof parent=='object' || typeof text=='object'){
        text.appendChild(someElement);
        parent.appendChild(someElement);
    }

}