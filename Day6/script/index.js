const counterValue = document.getElementById("counter");

let decreament = () => {
    let value = parseInt(counterValue.innerText);
    value -= 1;
    counterValue.innerText = value;
}
let increament = () =>{
    let value = parseInt(counterValue.innerText);
    value += 1;
    counterValue.innerText = value;
}