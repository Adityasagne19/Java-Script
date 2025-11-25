//Dates 

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

let myCreatedDate = new Date(2023 , 0,23)
console.log(myCreatedDate.toDateString());            //Months in Java Script Start from 0.

// let myCreatedDate = new Date(2023,0,23,5,3)      //Diffrent Ways og giving date.
// let myCreatedDate = new Date("2023-01-29")
// let myCreatedDate = new Date("29-01-2023")

console.log(myCreatedDate.toLocaleString());     

let myTimeStamp = Date.now();

console.log(myTimeStamp);                               //To get the exact time stamp.
console.log(myCreatedDate.getTime());                   //To get the exact time stamp of a created date for comparison purpose.

console.log(Math.floor(Date.now()/1000));               //To get the value in seconds.

//Some Methods Of Date 

let newDate = new Date();

// console.log(newDate.getDay);                                    
// console.log(newDate.getMonth);
// etc.


newDate.toLocaleString('default',{
    weekday: "long",
    
})

console.log(newDate);








