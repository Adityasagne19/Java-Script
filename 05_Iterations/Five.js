const coding = ["js", "py", "java", "c++", "rb"];

coding.forEach( function (val) {
   // console.log(val);
})

// Another way to write the same code using arrow functions

coding.forEach( (item) => {
    // console.log(item);
})

// Even more concise version

function printMe(item) {
   // console.log(item);
}

coding.forEach(printMe);

// Full version with all parameters

coding.forEach((item , index , arr) => {
   // console.log(item, index, arr);
});

// Example with objects in an array 

const myCoding = [
    {
         languageName: "JavaScript",
            fileExtension: "js"
    },
    {
         languageName: "Python",
            fileExtension: "py"
    },
    {
         languageName: "Java",
            fileExtension: "java"
    },
    {
         languageName: "C++",
            fileExtension: "cpp"
    },
    {
         languageName: "Ruby",
            fileExtension: "rb"
    }
]

// Accessing objects in the array using forEach

myCoding.forEach( (item) => {
    console.log(item.fileExtension);

})