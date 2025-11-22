const accountId = 552914
let accountEmail = "aditya19@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState;
//acountID ="0\23654" //Not allowed

accountEmail = "as@as.com"
accountPassword = "54321"
accountCity = "Shivpuri"

console.log(accountId);

/*Prefer not to use var because of issues in block scope and functioanal scope */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])