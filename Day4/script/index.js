let meraPromise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("I'm inside meraPromise1");
    }, 2000);
    
    resolve(12345);

    //reject(new Error("Oho margaye! Nahi bachege.."));
});

let meraPromise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("I'm inside meraPromise2");
    },5000);
    
    resolve(12346);
});

console.log("Main hun ek udhta Robo Doraemon.");

meraPromise1.then((value)=>{console.log("Received value: "+value)});
meraPromise1.catch((error)=>{console.log("Error pakad liya!")});

meraPromise2.then((value)=>{console.log("Received value: "+value)});
meraPromise2.catch((error)=>{console.log("Error pakad liya!")});