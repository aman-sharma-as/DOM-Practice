const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthNumber = document.querySelector("[data-lengthNumber]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const displayPass = document.querySelector("[data-passwordDisplay]");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const checkAll = document.querySelectorAll("input[type=checkbox]");
const stringSymbols = '~`!@#$%^&*()+={}[]:;"\'|\\<>,.?/';

let password = "";
let passwordLength = 10;
let checkCount = 0;

setIndicator("#ccc");

handleSlider();

function handleSlider(){
    inputSlider.value = passwordLength;
    lengthNumber.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;

    inputSlider.style.backgroundSize = ((passwordLength-min)*100/(max-min))+"% 100%";

}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function setRndInteger(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber(){
    return setRndInteger(0,9);
}

function generateUpperCase(){
    return String.fromCharCode(setRndInteger(65,91))
}

function generateLowerCase(){
    return String.fromCharCode(setRndInteger(97,123))
}

function generateSymbols(){
    let randNumber = setRndInteger(0, stringSymbols.length);
    return stringSymbols.charAt(randNumber);
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if(uppercase.checked) hasUpper = true;
    if(lowercase.checked) hasLower = true;
    if(numbers.checked) hasNumber = true;
    if(symbols.checked) hasSymbol = true;

    if(hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8){
        setIndicator("#0f0");
    }
    else if((hasUpper || hasLower) && (hasNumber || hasSymbol) && passwordLength >= 6){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
}

function shufflePassword(array){
    for (let i = array.length - 1; i > 0; i--)
    {
        let j = Math.floor(Math.random() * (i + 1)); 
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el)=>(str += el));
    return str;
}

async function copyContent(){
    await navigator.clipboard.writeText(displayPass.value);
    try{
        copyMsg.innerText = "Copied";
    }
    catch(error){
        copyMsg.innerText = "Failed";
    }

    copyMsg.classList.add("active");

    setTimeout(()=>{
        copyMsg.classList.remove("active");
    },2000);
}

function handleCheckboxChange(){
    checkCount = 0;
    checkAll.forEach((checkbox)=>{
        if(checkbox.checked)
            checkCount++;
    });

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}

checkAll.forEach((checkbox)=>{
    checkbox.addEventListener('change', handleCheckboxChange);
});

inputSlider.addEventListener('input',(e)=>{
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click',()=>{
    if(displayPass.value)
        copyContent();
})

generateBtn.addEventListener('click',()=>{
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    // For every new click
    password = "";

    let funcArr = [];
    if(uppercase.checked){
        funcArr.push(generateUpperCase);
    }
    if(lowercase.checked){
        funcArr.push(generateLowerCase);
    }
    if(numbers.checked){
        funcArr.push(generateRandomNumber);
    }
    if(symbols.checked){
        funcArr.push(generateSymbols);
    }

    for(let i = 0; i < funcArr.length; i++){
        password += funcArr[i]();
    }

    for(let i = 0; i <= passwordLength - funcArr.length; i++){
        let randIndx = setRndInteger(0, funcArr.length);
        password += funcArr[randIndx]();
    }

    password = shufflePassword(Array.from(password));
    displayPass.value = password;

    calcStrength();
})