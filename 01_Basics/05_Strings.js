const name = "Aditya"
const repoCount = 5

//console.log(name + repoCount +"Value") //Outdated method

console.log(`Hello my Name is ${name} and my repo count in ${repoCount}`);  //New and Modern Way called String intercolation 

const gameName  = new String('Football') // Another way of declaring a String 

//Functions Of String 

console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) // NOTE: It does not include the last index value meaning 4 here .
console.log(newString)                    // OUTPUT: Foot meaning it took only index 0,1,2,3

const newString2 = gameName.slice(-8,4)    //In Slice you can Also give Negative value 
console.log(newString2);

const anotherString = "   aditya   "
console.log(anotherString);
console.log(anotherString.trim());           //This wiill trim all the spaces 

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','_'));         //This is used to replace any substring with any other one .

console.log(url.includes('adi'))              //This shows if the substring 

const StringSplit = "cat-dog-horse"           //This going to Split the String on the Basis of '-'. 
console.log(StringSplit.split('-'));






