// Parent Class
class User {
    constructor(username){
        // When an object is created using 'new'
        // this.username property is added to that object
        this.username = username
    }

    // This method is NOT copied to every object
    // It is stored inside: User.prototype
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}



// Child Class inheriting from User
class Teacher extends User{

    constructor(username, email, password){

        // Calls Parent constructor
        // Internally does:
        // User.call(this, username)
        super(username)

        // These properties are added to the current object (chai)
        this.email = email
        this.password = password
    }

    // This method is stored inside:
    // Teacher.prototype
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}



// Object Creation
const chai = new Teacher("chai", "chai@teacher.com", "123")

/*
INTERNAL PROTOTYPE LINKING HAPPENS HERE:

1. chai.__proto__ = Teacher.prototype
2. Teacher.prototype.__proto__ = User.prototype
3. User.prototype.__proto__ = Object.prototype

Prototype Chain becomes:

chai
 ↓
Teacher.prototype
 ↓
User.prototype
 ↓
Object.prototype
 ↓
null
*/



// logMe() is NOT present in chai
// JS looks into Teacher.prototype → Not found
// Then looks into User.prototype → Found
chai.logMe()



const masalaChai = new User("masalaChai")

// masalaChai.__proto__ = User.prototype
masalaChai.logMe()



// instanceof checks whether
// User.prototype exists in chai's prototype chain

console.log(chai instanceof User);      

/*
instanceof internally checks:

chai.__proto__ === Teacher.prototype          ❌
Teacher.prototype.__proto__ === User.prototype  ✅ FOUND

So output → true
*/
