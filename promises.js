
function register (callback){
    return new Promise ((resolve, reject) =>{
    setTimeout(() => {
        console.log ('Register end');
        callback();
    }, 1000);
});
}

function sendEmail (callback){
    return new Promise ((resolve, reject) =>{


        setTimeout(() => { return reject ('error while sending email');
    }, 5000);
        
    //     console.log ('Send Email');
    //     callback();
    // }, 1000);
});
}

function login (callback){
    return new Promise ((resolve, reject) =>{
    setTimeout(() => {
        console.log ('Login end');
        callback();
    }, 1000);
});
}

function getUserData (callback){
    return new Promise ((resolve, reject) =>{
    setTimeout(() => {
        console.log ('GET User Data');
        callback();
    }, 1000);
});
}


function displayUserdata (callback){
    return new Promise ((resolve, reject) =>{
    setTimeout(() => {
        console.log ('Display User data');
        callback();
    }, 1000);
});
}



//Async await

async function authenticate (){
    await register ();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserdata();
}catch (err){
    console.log(err);
    throw new Error ();
}


authenticate ().then(()=>{
    console.log ('All set!');
}); catch ((err)=>{
    
}
)

console.log ('Other applications works!');