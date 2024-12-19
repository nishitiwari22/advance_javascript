// function a(){
//     c();
//     function c(){  
//         // Function 'c' is lexically inside function 'a' and function 'a' is lexically inside global scope. 
//     console.log(b);
//     }
// }
// // Function which is inside another function is still able to access b which is in global scope 
// var b =10;
// a();

// Shadowing:

// var a = 100;
// let b = 100;
// {
//     var a = 10; // This 'a' shadows the global 'a'
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b); //It will too shadow the let which is the 'SCRIPT' scope
//     console.log(c);

// }
// console.log(a); //It again shadows the global scope as they both are pointing to the same memory. It modifies the value of global 'var' and makes it 10.
// console.log(b); //This will not be able to 

// Illegal Shadowing
// let a = 20;
// {
//     var a = 20;
// }
// You cannot shadow a ket using a var

// This is fine. The belwo one is not an illegal shadowing
// let a = 20;
// function x(){
//     var a = 20;
// }

// Lexical scope works the same way inside the blocks also.
// const a = 20;
// {
//     const a = 100;{
//         const a = 200;
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);

//Rules of scope which apply to normal functions works the same in arrow functions


