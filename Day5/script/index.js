// using async await
// async ek promise return karta h

async function utility(){

    let upMausam = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("UP mein garmi hai");
        }, 5000);
    });

    let delhiMausam = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Delhi mein kaafi garmi h, lekin metro h");
        }, 6000);
    });

    let uM = upMausam;
    let dM = delhiMausam;

    return [uM, dM];
}


// Using fetch
// Fetch ek promise return karta h
// Fetch ka use data send aur receive karne ke liye karte h
// Getting promise using Fetch

async function getData(){
    let content = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let output = await content.json();

    console.log(output);
}

async function weather(){
    let content = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c6f99ff951771a7be8acc29fcc794409");
    let output = await content.json();

    console.log(output);
}


async function trendingNews(){
    let news = await fetch("https://newsapi.org/v2/top-headlines/sources?country=in&language=en&apiKey=485f4efca03f449999d0e025653a2152");
    let output = await news.json();

    console.log(output);
}


// using Closure function
// Outer function ke andar ke inner function ko outer function ke data/variable ke sath
// bind kar dene ko "Closure" bolte h

function makeFunc(){
    let name = "Muganbbo";

    function foo(){
        console.log(name);
    }
    return foo;
}

let myFunc = makeFunc();

