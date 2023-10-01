let myDiv = document.createElement('div');

function triggerEvent(event){
    if(event.target.nodeName === 'P'){
        console.log("Clicked on: "+ event.target.textContent);
    }
}

myDiv.addEventListener('click', triggerEvent);

for(let i = 1; i <= 100; i++){
    let element = document.createElement('p');
    element.innerText = `This is paragraph ${i}`;

    myDiv.appendChild(element);
}

document.body.appendChild(myDiv);