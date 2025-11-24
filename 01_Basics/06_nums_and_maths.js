const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const othernumber = 132.5689
console.log(othernumber.toPrecision(4));

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


console.log(Math);
console.log(Math.abs(-4));                //Changes any negative value to positive 
console.log((Math.round(5.7)));           //Round Offs to nearest value 
console.log(Math.ceil(4.2));              //Returns the smallest integer greater than or equal to its numeric argument.
console.log(Math.floor(4.9));              
console.log(Math.min(4,5,6,8));            //Returns the Smallest number.
console.log(Math.max(4,5,6,8));            //Returns the Largest number.

console.log(Math.random());                //Returns a pseudorandom number between 0 and 1.
console.log(Math.floor(Math.random()*10)+1); 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random*(max - min + 1)) + min); //This will return values between 10 and 20 only .









