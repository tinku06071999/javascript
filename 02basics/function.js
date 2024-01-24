// function sayHello(name){
//     console.log("Hello there ! TInku");
//     console.log("hello there ",name);
// }
// sayHello() // second console wiil be show undefined msg
// sayHello("tinku");

// function sayHello(name){
//     console.log(`
//     Hello Mr. ${name} . How are you?`); // trending method of console.log()
// }

// function namstey(){
//     return "Hello in National institute of Technology, Hamirpur, Himachal Pradesh."
// }
// var greetings = namstey();
// console.log(greetings);
// console.log(namstey());


// function oddEven(num){
//     if(num % 2 == 0) return "even";
//     else return "odd";
// }

// let ans = oddEven(5);
// console.log(ans);

// function loginUserMessag(username){

//    if(username === undefined){ // if condition to handle the undefinded condtion
//     return `Please enter a username`;
// }
//     return `${username} just logged in`
// }
// console.log(loginUserMessag("hitesh"));
// console.log(loginUserMessag("")); // just logged in
// console.log(loginUserMessag()); // undefined just logged in

// function with default parameter value
// function loginUserMessag(username = "default_User"){

//      return `${username} just logged in`
//  } 
// console.log(loginUserMessag()); // undefined just logged in


function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,500));

//about the rest operator (...)
// question when ... is spread operator and whrn it will a rest operator;

// basically rest operator is used when we dont know how many arguments we passed in function
//for example in ecommerce app we adding and adding product and the rest operator will make an array of the all the added price of product
// and we can easly caluclate the total cose like below 
// 
// const cartArray = calculateCartPrice(200,400,600); // cartArray is the array of all the passes argument/ prices
const array = [1,2,3,4,5,5,6,6,77,7,];
const cartArray = calculateCartPrice(array); // cartArray is the array of all the passes argument/ prices

// for(let i =0;i<cartArray.length;i++){
//     console.log(cartArray[i]," ");
// }
// let totalSumOfCart = 0;
// for(let i=0;i<cartArray.length;i++){ 
//     totalSumOfCart += cartArray[i];
// }
// console.log(totalSumOfCart);

// passing an object in function

// const user = {
//     username : "Tinku verma",
//     price : 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject(user);

// we driectly can give the object in function like below

// handleObject({
//     username: "verma g",
//     price: 199
// })

// passing array in function

// const myNewArray = [200,300,100,600];

function returnSecondValue(getarray){
    return getarray[1];
}
// console.log(returnSecondValue(myNewArray));


// directly passing the array

console.log(returnSecondValue([
    200,100,300,500
]))
