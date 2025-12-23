const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    swift : 'Swift by Apple'
}
// for in
// iterates over enumerable properties of an object
// for in loop is generally used with Objects
for (const key in myObject) {
    console.log(`${key} is Short form of ${myObject[key]}`);
    
}

// for in can also be used with arrays but not recommended

const myArray = ['js', 'py', 'rb' , 'swift'] 

for (const key in myArray) {
    console.log(`Index is ${key} and Value is ${myArray[key]}`);
    
        
}

//for in loop does not work with Maps and Sets 