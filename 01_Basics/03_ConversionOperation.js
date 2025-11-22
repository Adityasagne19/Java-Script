let score = "33abc"

// console.log(typeof score)
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//"33" = 33
//"33abc" = NaN (Not a number)
//true = 1,false = 0

let isLoggedIn = "Aditya"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

//1 = true ; 0 = false 
// "" = false   
//"Aditya" =  true 

let someNumber = 33

let StringNumber = String(someNumber)
// console.log(StringNumber)
// console.log(typeof StringNumber)


/******************************************************OPERATIONS********************************************************************/

let value =3 
let negValue = -value
//console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/2)
console.log(2%2)

let str1 = "Hello"
let str2 = "Aditya"

let str3 = str1+str2
console.log(str3)

console.log("1"+2);      //Output will be 12 because 1 is a string 
console.log(1+"2")
console.log("1"+2+2);
console.log(1+2+"2");   //Output will be 32 because it first adds 1+2 then gives 2 as a string 


console.log((2+3)*5%6)  //Always use Parenthises

console.log(+true)
console.log(+"")

let num1 , num2 , num3 
num1=num2=num3=(2+2)

let gameCounter = 100
gameCounter++;
//++gameCounter;
console.log(gameCounter)

//Prefix
let x1 = 3;
const y1 = ++x1;

//Postfix
let x2 = 3;
let y2 = x2++;


