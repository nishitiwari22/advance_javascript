const laptop = {
    model: 'xxx',
    color: 'white',
}
console.log(laptop.color);

//variables

//var, let, const

let languageName;
languageName= 'Javascript';
console.log(languageName);

const secondsInMinute=60;
secondsInMinute=30;

//block scope

if (true){
    // var age=25;
    let age=25;
    // const age=25;
    console.log(age);
}


//hoisting

console.log(greeting);
let greeting ='Hello';
//undefined

//know more abot temporal dead zone


// Operators 

// 1. Assignment
let x=10;
let y;
y=x;
console.log(y);


//compund operators
let m=10;
let n=20;
m=m+n;
m+=n; //x =x+y
m-=n; //x=x-y
m/=n; //x=x/y
m*=n; //x=x*y
console.log(m);


// 2. Comparison
// 3. Arithmetic 
// 4. Bitwise
// 5. Logical

//1. Logical AND &&
let mostHappy =true && true //false;
console.log(mostHappy);


const isLoggedIn =true;
const hasPermission=true;

if(isLoggedIn && hasPermission){
    //delete an item
    console.log ('item deledted successfully');
}


// 2. Logical OR ||


// const happy =true || false;
const areHappy =false ||true;
console.log(happy);

const Happy =false ||true;
console.log(happy);


if(isLoggedIn || hasPermission){
    //delete an item
    console.log ('item deledted successfully');
}



//3. Logical NOT !

const happy =false;
const animal ="cat";
console.log(!animal);

// const isLoggedIn =false;
// const hasPermission=false;

if(!isLoggedIn ){
  
    console.log ('redirect to login page');
}



//'cat' && 'dog';
// "dog"
// 'cat' && false  //browser mai run karo yeh teen line

// 6. String
// 7. Conditional (Ternary)


const userRole ='admin';
if (userRole=='admin'){
    console.log('You are an admin');
}else{
    console.log('You are not an admin')
}

userRole =='admin'? console.log('You are an admin')




//Equal (==)
// Not Equal (!=)
// Strict Equal (===)
// Strict not Equal(!==)
// Greater than(>)
// Greater than or Equal (>=)
// Less than (<)
// Less than or Equal (<=)

// console.log(4==5);
// console.log(4!=5);
// console.log(4==='4');
// coercion
// console.log(5<=8);



// 8. Comma 
// 9. Unary
// 10. Relational 






//primitive data types
//1. Number
//let age=25;
//let temp=-25;
//let price=50.50;


//3.Boolean
//true/false
//let isLoggedIn=true;
//let hasPermission =false;

//4.undefined
//let age;
//console.log(age);

//5. bigint


// 2**53 -1 
// 9007199254740991

//2. Structural type
//1.object
//1.1 Function
//Non-data structure
//callable
//1.2 Arrays
//1.3 Maps
//1.4 Set