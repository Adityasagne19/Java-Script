//if

// const temprature = 30;

// if(temprature < 50){
//     console.log("its cold outside");
// }
// else{
//     console.log("its hot outside");
// }

// < , > , <= , >= , == , === , != , !==

// const points = 200;

// if(points > 100){
//     var power = "fly";
//     console.log(`User power is ${power}`);
// }

//     console.log(`User power is ${power}`);
// Here power variable is accessible outside the if block because var is function scoped not block scoped.
// To avoid this problem we use let and const which are block scoped.

const balance = 500;

//if(balance > 300) console.log("test1") , console.log("test2");  //This is also valid syntax but not recommended. Use curly braces for better readability.

// if(balance < 200){
//     console.log("Less then 200");
    
// }else if(balance < 300){
//     console.log("Less then 300");
// }else if(balance < 500){
//     console.log("Less then 500");
// }else if(balance < 600){
//     console.log("Less then 600");
// }


const userloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromFacebook = true;

if(userloggedIn && debitCard){        //Logical AND operator means both conditions should be true
    console.log("Allow to buy");
    
}

if(loggedInFromGoogle || loggedInFromFacebook){  //Logical OR operator means any one condition should be true
    console.log("User logged in.");
    
}

