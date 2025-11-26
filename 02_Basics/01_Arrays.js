//**************************************************** //Arrays *********************************************************

//IMPORTANT NOTES ON ARRAYS 
//JavaScript arrays are resizable and can contain a mix of different data types.
//JavaScript array-copy operations create shallow copies.

const myArr =  [0,1,2,3,4,5,6]
const Marvel = ["Iron Man","Hulk","Loki"]
const myArr2 = (1,2,3,4)
// console.log(myArr[1]);

myArr.push(7);              //Adds the value to end of  the Array.
myArr.pop()                 //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(myArr);

myArr.unshift()             //Inserts new elements at the start of an array, and returns the new length of the array.
myArr.shift();              //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(myArr);

// console.log(myArr.includes(9));    //Determines whether an array includes a certain element, returning true or false as appropriate.
// console.log(myArr.indexOf(9));     //Returns the index of the first occurrence of a value in an array, or -1 if it is not present. 

const newArray = myArr.join()         //Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(newArray);
// console.log(myArr);

//Slice And Splice 

console.log("A" , myArr);

//Slice 
const myn1 = myArr.slice(1,3)         //Returns a copy of a section of an array
console.log("B",myArr);               //Does not make changes in the original array. 
console.log(myn1);

//Splice
const myn2 = myArr.splice(1,3)        //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log("c",myArr);               //NOTE: It also changes the original array. 
console.log(myn2);



