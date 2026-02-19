function multiplyby5(num){  
    return num*5;
}
// Funtions are objects in JavaScript, so we can add properties to them.
multiplyby5.power = 2 

//  We can call the function like this.
// console.log(multiplyby5(5));
//  We can access the properties of the function object.
// console.log(multiplyby5.power);
//  Every function has a prototype property, which is an object that is used to build the __proto__ property of instances created by that function when used as a constructor.
// console.log(multiplyby5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
    console.log(this.score);
    
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`); 
}

const chai = new createUser("chai",25);
const coffee = new createUser("coffee", 30);


chai.printMe();
coffee.increment();

// Notes 
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/