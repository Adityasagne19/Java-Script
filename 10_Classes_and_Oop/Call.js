function setUsername(username){
    // Complex DB calls 
    this.username = username
}

function createUser(username,email,password){
    setUsername.call(this,username)
    this.email =email
    this.password  =password
}


const user1 = new createUser("adi","adi@gmail.com","123456")
console.log(user1);