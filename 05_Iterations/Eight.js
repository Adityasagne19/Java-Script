const nums = [1,2,3];

// Using reduce method to sum all numbers in the array
// const myTotal = nums.reduce(function (acc , currentval) {
//     console.log(`acc: ${acc} and currentval: ${currentval}`);
//     return acc + currentval;    
// },0);

// Example 1: Using arrow function with reduce method
const myTotal = nums.reduce((acc , currentval) => acc + currentval , 0);

console.log(myTotal);

// Example 2: Calculating total price from an array of objects
const shoppingCart = [
    {
        itemName: "js course",
        price: 999 
    },
    {
        itemName: "py course",
        price: 2999 
    },
    {
        itemName: "web dev course",
        price: 1999 
    },
    {
        itemName: "mobile course",
        price: 9990 
    },
    {
        itemName: "java course",
        price: 4999
    }
    
]

const totalPrice = shoppingCart.reduce((acc, item ) => acc + item.price, 0);
 
console.log(totalPrice);
