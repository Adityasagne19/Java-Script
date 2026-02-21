// Parent Class
class User {

    // Constructor runs automatically when object is created using 'new'
    constructor(username){
        this.username = username   // instance property (stored inside object)
    }

    // Normal Method
    // This method is added to User.prototype
    // All objects of this class AND child classes can access this
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // STATIC METHOD
    // This method is attached directly to the class (User)
    // It is NOT stored in User.prototype
    // Hence, objects created using 'new' CANNOT access this method
    static createId(){
        return `123`
    }
}

// Creating object of User class
const hitesh = new User("hitesh")

// ❌ This will give ERROR because createId() is static
// Static methods cannot be accessed using object instances
// console.log(hitesh.createId())


// Child Class inheriting User class
class Teacher extends User {

    constructor(username, email){

        // super() calls the constructor of parent class (User)
        // It assigns username to this object
        super(username)

        // New property specific to Teacher class
        this.email = email
    }
}

// Creating object of Teacher class
const iphone = new Teacher("iphone", "i@phone.com")

// ❌ ERROR: createId() is static method
// Static methods are NOT inherited by objects
// They belong to class itself, not to instance
console.log(iphone.createId());