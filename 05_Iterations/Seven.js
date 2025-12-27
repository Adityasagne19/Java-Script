const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using map method to add 10 to each number
//const newNum = myNumbers.map((num) => {return num + 10});

// Chaining map and filter methods
const newNum = myNumbers
               .map((num) => {return num * 10})
               .map((num) => {return num + 1})
               .filter((num) => {return num >= 45});

console.log(newNum);