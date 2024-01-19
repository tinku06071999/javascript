const uid ="abc123";
var fullName = "Tinku Verma";
var email = "tinkuv049@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var loggedInTHroughGoogle = false;

// First method of printing
console.log(uid);
console.log(fullName);
console.log(email);
console.log(password);
console.log(confirmPassword);
console.log(loggedInTHroughGoogle);

// Second method of printing

console.log(`
    unique id of user is : ${uid}
    user's full name is : ${fullName}
    user's email addres is : ${email}
    user's password is : ${password}
    conform password : ${confirmPassword}
    Is user logged in through google : $(loggedInThroughGoogle)
`);

// third method pf printing in tabular form

console.table([ uid, fullName, email, password, confirmPassword, loggedInTHroughGoogle])