const marvel_heros = ["Ironman","Spiderman","Hulk"]
const dc_heros     = ["Batman","Superman","Aquaman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros);    //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(all_heros);

const arraysInArray = [1,2,3,4,[5,6,7,[8,9]]]                //NOTE: Remeber to add comas precisly.
const The_Array = arraysInArray.flat(Infinity);              //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//console.log(The_Array);


console.log(Array.isArray("Aditya"));
console.log(Array.from("Aditya"));                            //Creates an array from an iterable object.


console.log(Array.from({name: "Aditya"}));                    //Gives an empty array  besauce we havw not defined that we want array of keys or values.
//                                                               !Intresting Case!

let Score1= 100
let Score2= 200
let Score3= 300

console.log(Array.of(Score1,Score2,Score3));


