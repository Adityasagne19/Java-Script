const useremail = [];

if(useremail){
    console.log("Got user email");
}else{
    console.log("Don't got the email");
}
 

//falsy values in javascript 
// false , 0 ,-0, BigInt 0n ,  "" , null , undefined , NaN

//truthy values in javascript 
// true , 'false' , "  " , [] , {} , function(){}

// if (useremail.length  === 0){
//     console.log("Array is empty");    
// }

// const emptyObj = {};

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }


// Nullish Coalescing Oprerator (??) : null undefined 

let val1;
val1 = 5 ?? 10;                             // ?? returns the first defined value
val1 = null ?? 10;                          
val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;

console.log(val1);

// Ternary Operator 
// condition ? true : false        

const age  = 19;
const canVote  = age >= 18 ? console.log("Can vote") : console.log("Can't vote");        //ternary operator





