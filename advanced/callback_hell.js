console.log("Namaste");

setTimeout(function (){
    console.log("Javascript");
}, 5000)

console.log("Nishi Tiwari");

const cart = ["shoes", "pants", "saare"];
api.createOrder(cart, function(){
    api.proceedToPayment()
})

// Importance of Callbacks:

// Issues with callback:
// a. Callback hell
// b. Inversion of Control