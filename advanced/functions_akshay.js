//BASICS

//Function Definition

function introduceMe(username, profession, age)
{
    console.log(typeof username);
    console.log(typeof profession);
    console.log(typeof age);

    console.log('Hey,');
    console.log(`My name is ${username || `nishi_the_great`}.`);
    console.log(`I am a ${profession}`);
    console.log(`I am ${age} years old.`);
}
// Function call
const returnValue = introduceMe()

introduceMe('Nishi', 'Software engineer', 20)
introduceMe('Hamster', 'Pet', 2)




//Function Statement aka Function Declarations (Both are same)
a(); //Accessing 'a' before even creating it. This will work because hoisting works in functions

function a(){
    console.log("a called");
}
// a();
// Function Expression
/*We can assign functions to variables the n it acts as a value */

// b(); //Accessing 'b' before even creating it it will throw an error because 'b' is treated as any other varaible and hoisting is not possible in this case. 
var b = function(){
    console.log("b called");
}
// b();

/* The major difference between function statement and function expression is of Hoisting*/

// Anonymous Function
/* Function without a name. Doesn't have their own identity. But according to EcmaScript function must have a name and so it will result in as a syntax error. Used where functions are used as values. */

/* function(){
 } */

// Named Function Expression
var c = function nishi(){
    console.log("nishi is amazing ");
}
 c(); // Access is possible by variable name and not my function name.

// Corner case
//nishi () This will give an error 

// Difference between paramters and arguments?

function hamster(param1, param2){  // What we write here in function scope are paramters
    console.log("hamsters are cute creatures ");
}
 hamster(4, 7); // What we write here while calling functions is arguments
// First Class Functions

//The ability to use functions as value and can be passed as arguments to another functions and can be returned from functions is known as first class functions.

var d = function(param1){
    return function xyz(){
    }
}
console.log(b());

// We can even pass functions inside another functions as an argument
// Arrow Functions






//variable scope
// const fileName='xyz.pdf';
// function download (){
//     //downlaod logic goes here
//     console.log(fileName)
// }
// download()


//function declaration and function expression

// function login(){

// }


//expression
const login=function (a,b){
    console.log('Logged in');
}
login()