//Singleton 

//Object Literals 

const mySym = Symbol("Key1");

const jsUser = {
    name:"Aditya",
    "Full Name":"Aditya Sagne",
    [mySym]: "mykey1",                            //Correct Syntax (Square Brackets []) for declaring Symbol in object. 
    age: 18,
    location: "Shivpuri",
    email:"adityasagne19@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Saturday"]
}

//Ways of Defining Object. 
// console.log(jsUser.email);                         
// console.log(jsUser["email"]);                //"Full Name" can't be defined by .(dot)
// console.log(jsUser["Full Name"]);            // That's why this method is important. 
// console.log(jsUser[mySym]);                  // Printing the symbol key.


//Object.freeze(jsUser);                       //Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

jsUser.greetings = function(){
    console.log("Hello JS User")
}
jsUser.greetingsTwo = function(){
    console.log(`Hello JS User, ${this["Full Name"]}` );   
}

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo())

;
