// object literal
// const user = {
//     username: "Tinku",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user Details form database")
//         // console.log(`username:${username}`) // give error bcs when this function is store in queue and call then it not know that what is username thats why we have to define the context using this keyword
//        console.log(`Username : ${this.username}`);
//        console.log(this) // this will print the current context which is the user object
//     }
// }
// console.log(user)
// console.log(user.getUserDetails())

// console.log(this) // gives an empty object in node environment but it will give an window object in browser


// constructor
// basically constructor are used to reduce the code.
// constructor helps to reuse the stucture or in creation of new instance of an object

// const promiseOne = new Promise();
// const date  = new Date();

// Here new() keyword works as a cinstructr

// now lets understand why we have to use the new keyword

function User (username, loginCount, isLoggedIn){
      this.username = username;
      this.loginCount = loginCount;
      this.isLoggedIn = isLoggedIn;
    //   return this; // no need to write it. Constructor implicitly return tha vlaues
  this.greeting = function (){
    console.log(`Welcome ${this.username}`);
  }
}


// now lets create an instance 

// const userOne = User("Tinku", 12, "true");
// console.log(userOne); // will print the above object

// // now lets create one more  

// const userTwo = User("Verma", 11, "false");
// console.log(userOne) // here we truying to print userOne but it still print the userTwo , now u see it overrite the previous one i.e userOne


 //  new keyword create new instance for object

const userOne  = new User("Tinku", 12, "true");
const userTwo  = new  User("Verma", 11, "false");

console.log(userOne);
console.log(userTwo);

