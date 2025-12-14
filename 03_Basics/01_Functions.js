function saymyname(){
// console.log("W");
// console.log("A");
// console.log("L");
// console.log("T");
// console.log("E");
// console.log("R");
// console.log(" ");
// console.log("W");
// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
}

saymyname()

// function addTwoNumbers(number1 , number2){
//     console.log(number1+number2);
    
// }

//Another way of Writing this.

function addTwoNumbers(number1 , number2){
    // let result = number1+number2
    // return result; 
    return  number1+number2 ;                                     //More Shorter way.
}

const result =addTwoNumbers(3,5);
//console.log("Result:",result);

function loginUserMessage(username){
    if(username == undefined){
        console.log("Please enter a username ");
        return
    }
    return  `${username} just logged in.`
}

//console.log(loginUserMessage("Aditya"));
//console.log(loginUserMessage());

// Another way of writing the same Login User Message Funtion.

function loginUserMessage(username="sam"){                            // We can also give some defailt value which will show in case of undefined username.
    if(!username){                                              // Using ! before username will work exactly same as the previous function.
        console.log("Please enter a username ");
        return
    }
    return  `${username} just logged in.`
}

// console.log(loginUserMessage("Aditya"));
// console.log(loginUserMessage());    

function calculateCartPrice(...num1){                            // This (...) is called Rest/Spread operator depending on its usage.
    return num1;
}

console.log(calculateCartPrice(200,400,500));                    //This will print the values in an Array.

//Passing An Object Into The Function.

const user = {
    Username: "AdityaSagne",
    price: 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.Username} and price is ${anyObject.price}`);
}
//handleObject(user);

//You can  also pass an Object directly into Function.

handleObject({
    Username : "sam",
    price : 666
})

//Passing Arrays into Funtions.

const myNewArray = [100,200,300]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

//Direct Passing Array into Function.

console.log(returnSecondValue([100,200,300,600]));




