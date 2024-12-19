// Closures: (Rememeber's the reference)

//  Closure :Function bundled with its lexical environment is known as a closure. 
// Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. 
// Its not just that function alone it returns but the entire closure and that's where it becomes interesting !! 


/*
function x(){
    var a = 7;
    return function y(){ // Cool developers right here.
        console.log(a); // 'a' ka refernce is returned. The ref to persist
    }
   return y;  // Noob developers right return here
}
// Above is what we call closure.
var z = x();
console.log(z); 
//....
z(); // It still remebers where 'a' was even though the function is destroyed that's the beauty of functions and closures.

*/
// What is closure? (Interviewer)
// Function along with it's lexical scope bundled together forms a closure.


// *** 2nd case when 'a' is outside y function ****
/*
function x(){
    var a = 7;
   function y(){ 
        console.log(a); // 'a' ka refernce is returned. The ref to persist
    }
     a  = 100;
   return y;  // Noob developers right return here
}
// Above is what we call closure.
var z = x();
console.log(z); 
//....
z(); // Now the ref points of 'a' points to 100.
*/

//  Deep inside scope chain.

/*
function z(){
    var b = 900;
function x(){
    var a = 7;
   function y(){ 
        console.log(a, b); // Here I am trying to access 'y's parent scope as well as 'x's parent scope.  
    }
y();  
}
x();
}
z();
*/


// Uses of closures:

// 1) Module Deign Pattern
// 2) Currying
// 3) Functions like once
//  4) Memoize
//  5) Maintaining state in async world
//  6) setTimeouts
//  7) Iterators
//  8) and many more...

// ******setTimeout + Closures Interview Question ******

/*
function x(){
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 3000);
    console.log("Jay Shree Radha Krishna");
}
x();
*/

/*
function z(){
    for(var i = 1; i<=5; i++){ // Because of var it prints 6 time 'let' can resolve this issue. 
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
    console.log("Jay Shree Radha Krishna");
}
z();
*/

// Resovlving by using closures if we need to use 'var'

/*
function m(){
    for(var i = 1; i<=5; i++){ // Because of var it prints 6 time 'let' can resolve this issue. 
        function close(m){
        setTimeout(function () {
            console.log(m);
        }, m * 1000);
}
close(i);
        // console.log("Jay Shree Radha Krishna");
    }
}
    m();
    */

// Things learned:
// 1. setTimeout stores the function in a different place and attached a timer to it, when the timer is finished it rejoins the call stack and executed.
// 2. Without closure the var reference gives the latest value as it does not retain the original value but rather has the reference so any update in value after timeout will be shown.
// 3. If we use let/const because they have block scope, every time a new copy of variable is attached, thus this can be done without closure

// CRAZY JS INTERVIEW 🤯ft. Closures 

/*
function outest(){
    var c = 20;
    function outer(b){
        function inner(){
            console.log(a, b, c);

        }
        let a = 10;
        return inner;

    }
    return outer;
}
//let a = 100;
var close = (outest())("Hello World");
close();
*/

// ***Datahiding in JS****

/*
function counter(){
    var count = 0;
    return function incrementCounter(){
        count++;
        console.log(count);
    }
}
var counter1 = counter()
counter1();
counter2();

var counter2 = counter();
counter2();
counter2();counter2();counter2();
*/
// Making the above code scalable below is how we made it more scalable by using a constructor 


/*
function Counter(){
    var count = 0;
    this.incrementCounter = function (){
        count++;
        console.log(count);
    }
    this.decrementCounter = function (){
        count--;
        console.log(count);
    }
}
var counter1 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
*/
// Disadvantages of Closure:

//  1) Can consume extra memory space
//  2) Sometimes closed over variables are not garbage collected.
//  3) If not handled with care it can lead to memory leaks and freexe the browser


// Realtion of garbage collector and Closure

/*
function a (){
    var x = 0;
    return function b(){
        console.log(x);
    }
}
var y = a();
y();
*/


// The memory is not freed as we don't when in future we want to access 'a's variable.

// Smartly collecting garbage variables:

function a(){
    var x = 0, z=10;
    return function b(){
        console.log(x);
    }
}
var y = a();

//...

y()

// In the above 'z' case it is smartly collected as garabge and the memeory is freed up. Why? becasue like 'x' we din't tried to get it from 'a's function or even in 'b's function and so it was never used. 


// Things learned:
// 1. An inner function can be directly called using two parenthesis ()().
// 2. Even parameters can be passed this way (Remember that the function needs to be returned to do this)
// 3. Closures can also be used for data hiding and encapsulation. So other code cannot access this value.
// 4. Unused variables are automatically deleted in High Level Programming language by garbage collector. Closures allocate a lot of memory which cannot be deleted so this acts as a disadvantage.
// 5. Some browsers now have smart garbage collectors that automatically deletes variables that are not used outside closures.