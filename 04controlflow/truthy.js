// const userEmail = "useremail@gmail.com"

// if(userEmail){
//     console.log("got the email") // this one will execute
// }else{
//     console.log("Don't have email")
// }

// const userEmail = ""

// if(userEmail){
//     console.log("got the email")
// }else{
//     console.log("Don't have email") // this one will execute
// }

// const userEmail = " "

// if(userEmail){
//     console.log("got the email") // this one will execute
// }else{
//     console.log("Don't have email")
// }

//  const userEmail = [];

//  if(userEmail){
//     console.log("got the mail")
//  }else{
//     console.log("Don't get the mail")
//  }
/*as we seen there when we pass an empty string the if condition fails but when pass the empty
array the if condition will execute means it take empty array as true
here comes the conpcept of the truthy value and falsy value
  */

/* falsy values
    false, 0 , -0, BigInt 0n, "", null, undefined,NaN
    other than the above value all are considered as truthy values
*/

/* truthy values
        "0", 'false', " ", [], {}, function(){}
 */

// checking an object if it is empty or not

// const emptyObj = {};

// if(Object.keys(emptyObj).length===0){
//     console.log("Empty object")
// }


// NUllish Coalescing Operator (??): used for  null,  undefined

// let val1;
// val1 = 5 ?? 10;

// console.log(val1); // 5

// val1 = null ?? 10; 

// console.log(val1); //10

// val1 = undefined ?? 10;
// console.log(val1) // 10

// val1 = undefined ?? 10 ?? 20;
// console.log(val1) // 10



// terniary operator

// consdition ? true : false

// const iceTeaPrice = 100;
// iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")

