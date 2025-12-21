//for of 
//for of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.

//["","",""]
//[{},{},{}]       

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const greeting = "Hello World";                     
for (const greet of greeting) {
   // console.log(`each char is ${greet}`);

}

// Maps 
// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

const myMap = new Map();

myMap.set('IN' , "India");
myMap.set('US' , "United States");
myMap.set('UK' , "United Kingdom");
myMap.set('IN' , "India");                    // duplicate key will be ignored

// console.log(myMap);

// for of with Maps

for (const [key,value] of myMap)  {
    console.log(key, ':-' , value);
}

// for of  does not work with Objects directly. 


