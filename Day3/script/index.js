// --------------------------------------------------------------------------
// Paragraph tag inside the body tag directly
let forP1 = performance.now();
for(let i = 0; i <= 100; i++){
    let newElement = document.createElement('p');

    newElement.textContent = `This is Paragraph ${i} inside first For loop.`;
    document.body.appendChild(newElement);
}
let forP2 = performance.now();
console.log(`Time: ${forP2 - forP1} ms`);
//----------------------------x--------------------x------------------------


/*
function triggerEvent(event){
    if(event.target.nodeName === 'P'){
        console.log("Clicked on: "+ event.target.textContent);
    }
}

myDiv.addEventListener('click', triggerEvent);
*/

//--------------------------------------------------------------------------
// Optimizing paragraph iteration
let forP3 = performance.now();
let myDiv = document.createElement('div');

for(let i = 1; i <= 100; i++){
    let element = document.createElement('p');
    element.innerText = `This is paragraph ${i} inside second For loop.`;

    myDiv.appendChild(element);
}

document.body.appendChild(myDiv);
let forP4 = performance.now();
console.log(`Time: ${forP4 - forP3} ms`);
//----------------------------x--------------------x------------------------

// --------------------------------------------------------------------------
// Using Document Fragment to generate paragraphs
let forP5 = performance.now();
let fragment = document.createDocumentFragment();

for(let i = 1; i <= 100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = `This is paragraph ${i} inside third For loop.`;

    fragment.appendChild(newElement);
}
document.body.appendChild(fragment);
let forP6 = performance.now();

console.log(`Time: ${forP6 - forP5} ms`);
//----------------------------x--------------------x------------------------