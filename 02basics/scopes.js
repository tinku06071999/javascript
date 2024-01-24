/* something intersting is 
   function scope and globe scope
   */
// {} when it comes with a function or with if else statement etc. then  it is scope otherwise it will work as object

// let a = 400;
// // let b = 30;
// if(true){
//     let a = 99;
//     var b = 50;
//     const c = 689;
//     console.log("inner a: ", a);
//     console.log("inner b: ", b);
// }
// console.log("outer a: ",a);
// console.log("outer b: ",b);

//Q. what is closure?
// basiclly the inner function can acces the outer function varaibles that is k/a closure
// or child function can acces the parent function is k/a closure


function one(){
    const username = "Tinku verma"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
// console.log(website) // error we cant acces it here out of it's scope
   two();
}
// one();

if(true){
    const username = "Tinku verma"
    if(true){
        const website = " Youtube"
        // console.log(username +website );
    }
    // console.log(website); // error website not defined
}
// console.log(username); // error username not defined 


// intersting topic
addone(5); // not givining an error

function addone(num){
    return num+1;
}


addone(5); // giving an error beacsuse we assing this function (hoisting concept )

const addtwo = function(num){
   return num+2;
}
 