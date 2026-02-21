// ES6 CLASS APPROACH
// A class in JavaScript is just a syntactical sugar over prototype-based inheritance

class User {

    // constructor is a special method
    // It is automatically called when an object is created using 'new'
    constructor(username, email, password){

        // 'this' refers to the current object that is being created
        this.username = username;   // instance property
        this.email = email;         // instance property
        this.password = password    // instance property
    }  

    // This method is NOT stored inside every object
    // It is stored inside User.prototype automatically
    encryptPassword(){
        return `${this.password}abc`
    }

    // Another prototype method
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

// Creating object using 'new' keyword
// Steps happening internally:
// 1. A new empty object is created
// 2. constructor function is called
// 3. 'this' is linked to the new object
// 4. Prototype (__proto__) is linked to User.prototype
// 5. Object is returned automatically

const chai = new User("chai", "chai@gmail.com", "123")

// Calling prototype methods
console.log(chai.encryptPassword());
console.log(chai.changeUsername());



// Behind the scenes, classes work like this:

// CONSTRUCTOR FUNCTION (Before ES6 Classes existed)
// Classes internally work like this

function User(username, email, password){

    // Properties are stored inside object itself
    this.username = username;
    this.email = email;
    this.password = password
}

// Adding method to prototype manually
// So that every object does NOT get its own copy of function
// Memory efficient approach

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

// Another shared method
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

// Creating object
// 'new' keyword will:
// 1. Create a new object
// 2. Link it with User.prototype
// 3. Bind 'this' to new object
// 4. Return object

const tea = new User("tea", "tea@gmail.com", "123")

// Methods are accessed via prototype chain
console.log(tea.encryptPassword());
console.log(tea.changeUsername());