//const tinderUser =  new Object();

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {                           //Nested Object 
email : "regular@.gmail.com",
fullname: {
    userfullname: {
        firstname : "Aditya",
        lastname  : "Sagne"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 = {2:"a",3:"b"}
const obj3 = {4:"a",5:"b"}

const obj4 = Object.assign({},obj1,obj2,obj3)   //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
console.log(obj4);

