var c = 300
let a= 100
// Any Thing between Curly Brackets {} is a Scope. 
// Any Thing In a Scope Should Not Come Out Of it,  

if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER :",a);                                   //This is Block Scope.      
    
}

console.log(a);                                                 //This is Global Scope.                                   
//console.log(b);
//console.log(c);


// The value of var comes out of scope which is problamatic so we avoid using  var.


function one (){                           //In Nested Scope Variables declared in Parent Function can be Accessed by Child Funtion But Not Vice Versa.
   const username = "Aditya"
    function two () {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
    
} 
one()

 if (true){
    const username = "Aditya"
    if (username === "Aditya"){
        const website = "youtube"
        console.log(username+website);  
    }
    //console.log(website);                  // This will Show Error because it is out of scope. 
    
 }
 //console.log(username);                    // This will Also Show Error because it is out of scope. 
 
//+++++++++++++++++++++++++++++++++++++++++++INTRESTING+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Addone(5));                      //We can print this before the function

function Addone(num){                        //This is a Funtion 
    return num+1
}

//console.log(Addtwo(5));                    //This can't be printed before the Expresion.

const Addtwo = function(num) {              //This is also a Funtion but Also Called  Expresion
    return num+2
}
console.log(Addtwo(5)); 