// Immediately Invoked Function Expressions (IIFE)
//IIFE is a JavaScript function that runs as soon as it is defined.
//We also use IIFE to remove global scope pollution by wrapping our code in a function scope.

(function sayHello() {              // This is the syntax of Named IIFE 
    console.log(`This is IIFE`);    // we use parentheses to define the function and then we use another set of parentheses to invoke the function immediately.
})();                               // we use semicolon at the end to avoid any errors in case of minification or concatenation of scripts.

// We can also use arrow functions to define IIFE

(() => {
    console.log(`This is IIFE in ${Name} Function`);
})('Arrow')
// Here we are passing 'Arrow' as an argument to the IIFE and it will be assigned to the parameter 'Name'.

