const myNum = [1,2,3,4,5,6,7,8,9,10];

// Filter method to get numbers greater than 4.

// const newNums = myNum.filter((num) => {
//     return num > 4;
// })

// Alternative using forEach

// const newNums = []
// myNum.forEach((num) => {
//     if(num>4) {
//         newNums.push(num);
//     }
//     })


//console.log(newNums);


const books = [
    { title: "Book One", author: "Author A", rating: 4.5 , year: 2010},
    { title: "Book Two", author: "Author B", rating: 3.8 , year: 2005},
    { title: "Book Three", author: "Author C", rating: 4.2 , year: 2015},
    { title: "Book Four", author: "Author D", rating: 2.9 , year: 2000},
    { title: "Book Five", author: "Author E", rating: 4.7 , year: 2020},  
];      

const Hr =  books.filter((Hr) =>   Hr.rating > 4.0 && Hr.year >= 2000);

console.log(Hr);



