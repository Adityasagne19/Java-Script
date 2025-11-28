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

//console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 = {2:"a",3:"b"}
const obj3 = {4:"a",5:"b"}

// const obj4 = Object.assign({},obj1,obj2,obj3)   //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// console.log(obj4);

const obj4 = {...obj1,...obj2,...obj3}             //Using the Spread Operator (...)
// console.log(obj4);

const users = [                                    //Arrays of Objects 
    {
        id: "123",
        email: "users@gmail.com"
    },
    {
        id: "123",
        email: "users@gmail.com"
    },
    {
        id: "123",
        email: "users@gmail.com"
    }
]
users[1].email;                                    //Accessing  a Object in a Array.

//Using Some Object Methods 

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));              //Gives the keys in form of an Array
// console.log(Object.values(tinderUser));            //Gives the values in form of an Array
// console.log((Object.entries(tinderUser)));          //Gives both     in form of an Array


const  Course = {
    CourseName : "JS In Hindi",
    Price : "Free",
    CourseInstructor : "Aditya"
}

Course.CourseInstructor                                 //This is a long way of accessing CourseInstructor.

//Another Clean AND Short way 

const {CourseInstructor : Instructor} = Course;

//console.log(CourseInstructor);                          //Now only Need to Log it every time we need to  use it.
//console.log(Instructor);                                //We can also make a shorter name for it.


//JSON API
{
    "name" = "Aditya",
    "courseName" = "JS",
    "price" = "Free"
}


//You can Also Get APIs in for of Array.
//Like this.
[                                                   //To Formate this type of data there are whereas formatters 
    {},
    {},
    {}

]

