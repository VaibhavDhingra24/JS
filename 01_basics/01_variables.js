const account_id = 144553
let account_email = "Vaibhavd@google.com"
var account_password = "12345"
account_city = "Delhi"
let account_state;

// account_id = 2

account_email = "hs@abc.com"
account_password = "5356475"
account_city = "Bengaluru"

console.log(account_id);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([account_email, account_id, account_password, account_city, account_state])