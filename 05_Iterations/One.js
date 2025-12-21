// for 

// for (let i = 0; i < 10; i++) {                       // simple for loop
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best No.");
        
//     }
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {                          // Nested for loop
//     console.log(`Outer Loop value :${i}`);    
//     for (let j = 0; j <= 10; j++) {
//         //console.log(`Inner Loop Value : ${j}`);
//         console.log(i+'*'+j+' = '+ (i*j))                // Multiplication Table       
//     }
    
// }

let myArray = ['flash', 'batman', 'superman'];

console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    
}


// break and continue

for (let index = 0; index <= 10 ; index++) {
    if (index == 5){
        console.log("5 detected");
        break
    }
console.log(`Value is : ${index}`);

}



for (let index = 0; index <= 10 ; index++) {
    if (index == 5){
        console.log("5 detected");
        continue
    }
console.log(`Value is : ${index}`);

}