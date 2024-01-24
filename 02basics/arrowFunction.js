// this keyword is used to refer the curret context
/* for exmaple in below example */

const user ={
    username: "Tinku Verma",
    price: 200,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the webssite`)
        // console.log(this) // print all the context 
    }
}
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();
// console.log(this); // empty object 

// function chai(){
//     const username = "Tinku Verma"
//     console.log(this.username); // undefinded , this function not working in function
// }
// chai();


// const chai = function (){
//     const username = "Tinku Verma"
//     // console.log(this);
//     // console.log(this.username); // undefinded , this function not working in function
// }
// chai();

// const chai = () =>{
//     const username = "Tinku Verma"
//     console.log(this) // empty object
//     console.log(this.username); // undefinded , this function not working in function
// }
// chai();

// arrow function

// const addtwo = (n1, n2) =>{
//     return n1+n2
// }

// implicict return arrow function

// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) =>  (num1 + num2)

// const addTwo(num1,num2) => ({username: "Tinku Verma"}) // when we want to return an object implicitly then use parentehesis before curly braces

//  console.log(addTwo(5,6));

