const user = {
    username : "aditya",
    password : "123456",
    loginCount: 5,     


    getUserDetails: function(){
       // console.log("Got user details from Database");
        console.log(`Username:${this.username}`);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// Constructor function is a special type of function that is used to create objects. It is called with the new keyword and it initializes the properties of the object.
function User(username, password,loginCount) {
    this.username = username;
    this.password = password;
    this.loginCount = loginCount; 

    this.greetng = function(){
        console.log(`Hello ${this.username}, welcome back!`);
    }

    return this
}

// New keyword creates an empty object and then calls the constructor function with that empty object as its context (this). 
//  The constructor function initializes the properties of the object and returns it.
const userOne = new User("Atharv","321", 10)
const userTwo = new User("Aditya","123", 5)
console.log(userOne);
console.log(userTwo);



//.constructor is a property of the object that points to the function that was used to create it.
console.log(userOne.constructor);