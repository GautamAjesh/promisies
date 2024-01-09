const promiseOne = new Promise((resolve, reject) =>{
    //Do async task
    //DB calls, cryptography, network calls

    setTimeout(() =>{
        console.log('Async task completed');
    },1000)
})
promiseOne.then( () =>{
    console.log("promise resolved"); // this is not printed because the resolve is not called
})


//resolve promise
new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('promise resolved');
    },1000)
}).then((data) => console.log(data)); // this is printed because the resolve is called



//chain promises with then() and catch() method 
const promiseThree =new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let error=false;
        if(!error){
            resolve({userName:'Ajesh Gautam', age:'22', city:'Kathmandu'});   // resolve work with then()
        }else{
            reject('Error: something went wrong, This is printed when there is error'); // reject work with catch()
        }
    },1000)
})

promiseThree.then((user) =>{
    console.log(user);
    return user.userName;
}).then((userName) =>{
    console.log(userName);
}).catch((error) =>{
    console.log(error);
}).finally(() => console.log('This statement is always excecuted!!!!!'));


async function consumePromise(){
    const response = await promiseThree;
    console.log(JSON.stringify(response) + ' from async function');
}
consumePromise();
