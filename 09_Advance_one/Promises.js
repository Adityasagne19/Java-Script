// Promises : An object that may produce a single value some time in the future.
// Syntax 1
const PromiseOne = new  Promise(function(resolve, reject){
    //Do an asynchronous task
    //DB call , cryptography , network 
    setTimeout(function(){
        console.log('Asyn task is completed');
        resolve();
    },1000)
})

PromiseOne.then(function(){
    console.log('Asyn task  is resolved');
})

// Syntax 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Asyn task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('Asyn task 2 completed');
    
})

//syntax 3 
const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"aditys", email:"aditys@gmail.com"})

    },1000)
})

PromiseThree.then(function(user){
    console.log(user)
})

//Syntax 4 : Promise Chaining
const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"aditya",password:'123'})
        } else {
            reject('Error : something went wrong ')
        }
    },1000)
})
    PromiseFour.then((user)=>{
        console.log(user);
        return user.username;
    }).then((username)=> {
        console.log(username);
    }).catch((error)=>{
        console.log(error);
    }).finally(()=>{
        console.log("The Promise is either resolved or rejected");
    })

     //Syntax 5 : Async Await
    const PromiseFive = new Promise(function(resolve,reject){
         setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"JavaScript",password:'123'})
        } else {
            reject('Error : something went wrong ')
        }
    },1000)
})


async function consumePromiseFive() {
    try{
        const response = await PromiseFive;
        console.log(response);
        
    }catch(error){
        console.log(error);
        
    }
}

consumePromiseFive();


// async function getAllUsers() {
//    try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
//    } catch (error) {
//     console.log("E: ",error);
    
//    }

// }

// getAllUsers();

// Using then and catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
})