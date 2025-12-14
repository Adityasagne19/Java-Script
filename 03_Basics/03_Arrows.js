//    `This` 
const user = {
    username: "Aditya",
    price: 999,
     
    welcomeMessage: function() {
        //console.log(`${this.username}, Welcome to the Website`);      
        //console.log(this); // Here this refers to the user object
          
}
}

// user.welcomeMessage();
// user.username= "Sam" 
// user.welcomeMessage(); 

//console.log(this); // In Global Context this refers to Window Object in Browser and Empty Object in Node.js

// In Browser the global object is 'window', so 'this' in global scope refers to 'window'.

// In Node.js the global object is 'global', so 'this' in global scope refers to an empty object {}.


// Using `this` in Functions
// function chai(){              // It Prints Undefined because in functions we can not use `this` in this way.
//     Username = "Aditya"
//     console.log(this.username);
    
// }

// chai();


//Arrow Functions

// const addTwo = (num1,num2) => {          //When we use curly braces in arrow function we have to use return keyword to return a value.
//     return num1 + num2;
// }

// const addTwo = (num1,num2) => num1 + num2;  //This is called Implicit Return in Arrow Functions.

// const addTwo = (num1,num2) => (num1 + num2);   // When we use parentheses in arrow function we don't need to use return keyword to return a value.
                                               // This technique is heavily used in ReactJS.


const addTwo = (num1,num2) => ({Username: "Aditya"}); // To return an object from an arrow function we have to wrap the object in parentheses.  


console.log(addTwo(5,7));