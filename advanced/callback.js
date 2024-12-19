// ***** Callback ******

//What is a Callback Function in JS?

setTimeout(function(){
    console.log("timer");
}, 5000);

function x(y){
    console.log("x")
    y();
}

x(function y()){
    console.log("y")
}

// reject mai jo pass kiya wo catch mai dikhta hai or jo 
// resolve mai pass kiya wo then ke andar
//  as a parameter recive hoga displayuser 
//  mai dikhta hai


//Scenario

// 1. register
// 2.send welcome email
// 3. login
// 4. Get user Data
// 5. display User Data

// functionwaitforthreeseconds(){
//     let ms=3000+ new Date() gettime();
//     while (new Date ()<ms){}
// }


//Without settimeout and the callback functions we can achieve asuchronous function in JS
function register (callback){
    setTimeout( () => {
        console.log ('Register end');
        callback();
    }, 1000);
}

function sendEmail (callback){
    setTimeout( () => {
        console.log ('Send Email');
        callback();
    }, 1000);
}

function login (callback){
    setTimeout( () => {
        console.log ('Login');
        callback();
    }, 1000);
}



function getUserData (callback){
    setTimeout( () => {
        console.log ('Got user data');
        callback();
    }, 1000);
}


function displayUserData (callback){
    setTimeout( () => {
        console.log ('User data Displayed');
        callback();
    }, 1000);
}


register(function(){
    sendEmail(function (){
        login (function  (){
            getUserData(function (){
                displayUserData();
            });
        });
    });
});

console.log('Other applications work!');


//callback

function formatText(text, formatCb){
    return typeof formatCb=== 'function'? formatCb(text):text.toUpperCase();

}
const oneResult=formatText('nishi', function(text){
    return text.charAt(0).toUpperCase()+text.slice(1);
});
console.log(result);


const sum = (num1, num2)=>num1+num2;
const result=sum(4,5);
console.log(result);

//Good Practices

//1. Naming
//show,get, calc
//2.one function one action
//3. function name should be descriptive