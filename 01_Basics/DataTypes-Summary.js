//Primitive
// 7 Types: String , Number , Boolean , Null , Undefined , Symbol , BigInt 

const score = 100
const ScoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let  userEmail

const id = Symbol ('123')         //The Input is same but they are not same that's  what Symbol does. 
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 65455151561515414n //BigInt 

// Reference  (Non - Primitive)

//Array , Objects , Functions 

const heros = ["shaktiman", "ironman", "batman"]  //Array

let myobj = {
    name : "Aditya",                              //Object (Anything  inside curly brackets is a )
    age: 21
}

const MyFunction = function(){
    console.log("HelloWorld")
}

console.log(typeof MyFunction)
