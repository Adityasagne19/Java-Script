let index = 0;
// while loop

while (index<=10) {
    console.log(`The Value of  Index is ${index}`);
    index = index + 2;
}

let myArray = ["flash", "batman","Superman"];
// iterating using while loop
let arr = 0; 
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1;
}

let score = 1;
// do while loop
// execute first then check the condition
do {
    console.log(`Score is ${score}`);
    score++;
} while (score<= 10);