const accountId = 14453
let accoutEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"


console.log(accountId);

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId, accountPassword, accoutEmail, accountCity])
