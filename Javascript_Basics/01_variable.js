const accountId = 12678;
let accountEmail = "rishi125@google.com";
var accountPassword = "343678"
accountCity = "Delhi";
let accountState;

// accountId = 23145;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "rishik87@gmail.com";
accountPassword = "12356";
accountCity = "U.P"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
