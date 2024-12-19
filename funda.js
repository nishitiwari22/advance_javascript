// Fundamentals os JS: 
// Arrays and obj
// func return 
// async js coding

//Line by line coding chale that is synchronous 
// jo bhi code async nature ka ho usey side stack mein bhej do and agle code ko chalao  jo bhi sync nature ka ho jab bhi saara sync code chal 
//jaaye tab check karo ki async code complete hua ya nahu and agar wo complete hua ho toh usey main stack mein laao and chalo

async function abcd(){
    await fetch(`https://randomuser.me/api`)
}

var obj = {
    name : "nishi",
    age: 12
}

Object.freeze(obj);
obj.age = 21;

function abcd(a, b, c){
    return "hello world";
}

var ans = abcd();

var blob = await fetch(`https://randomeuser.me/api`);
var res = await blob.json();

console.log(res);
