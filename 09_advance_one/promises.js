// before promieses we were using bluebird and q libraries to fetch and etc. opearatoins

// A Promise is an object representing the eventual completion or failure of an asynchronous operation
// basically promise a thing / task  that will happen in future (in code)
// in this toturial we learn how the promises create and how we can consume or use them 
// first create promises;
// promises are kind of object and we can create them by using new keyword

// call back hell : there a chain of callbacks 
// promise() can reduce then call back hell
// promise take calll back in it 
// const promisesOne = new Promise( function(resolve, reject){ // there two possibility either our request will resolve or reject
  // Do an assync operation
  // for example
  // DB calls, cryptography, netwrok calls etc.

//   setTimeout(function(){
//     console.log("Assync task is complete")
//   },1000)
//   resolve() // this will use to connect .then
// });

// // lets consume the promise 

// promisesOne.then(function(){  // .then is direclty rletes to resolve we passed as parameter in promise call back function
//     console.log("promis COnsumed");  // not prints this beacuase we didn't connect reolve and then it will be print after we connect resolve to connect reolve just add resolve() method where we create promise
// })

// in above method we  creates and consume promise step by step 
// now lets use promise in a single go

// new Promise(function(resolve, reject){
//   setTimeout(function(){
//     console.log("assync task 2 complete");
//     resolve()
//   },1000)
// }).then(function(){
//   console.log("Promise consumed")
// })


// bassically when a promise done then we have to do some 
// work or operation on db or on something else 
// so for that we have to pass the thing on which we want do opearion to 'then'
// for it we can pass an object in resolve which we use in promise and then it will pass to the .then we can esily do opeartions
// lets see an exaple

// const promiesThird = new Promise(function(resolve, reject){
//   setTimeout(function(){
//   },1000);

//   resolve({username:"tinkuverma", userEmail:"tinku@example.com"});
// })

// promiesThird.then(function(user){  // user is a parameter we recived from promise 
//   console.log(user);
// })


// now lets create promise with error handling

// const promiseFour = new Promise(function(resolve, reject){
//   setTimeout(function() {
//     let error = true;
//     if(!error){
//       resolve({username:"Tinku", password:"1234"})
//     }else{
//       reject('Error: something went wrong');
//     }
//   }, 1000);
// })

// now lets extract he username
// const userName = promiseFour.then(( user) => {  // we cant do in this way means we cant store the return data in a variable here we do chainging
//    console.log(user);
//    return user.username // error un_handelled_rejection
// })

// chaining of .then

// const userName = promiseFour.then(( user) => {  // we cant do in this way means we cant store the return data in a variable here we do chainging
//    console.log(user);
//    return user.username // error un_handelled_rejection
// }).then((userName) =>{ // here the value which parameter is coming from previous then return return user.username  from this line
//     console.log(userName);
// })
// still get that error bcs we are not handling error or not using catch() method here 
// now lets use catch method in chaining with then

// const userName = promiseFour.then(( user) => {  // we cant do in this way means we cant store the return data in a variable here we do chainging
//   console.log(user);
//   return user.username // error un_handelled_rejection
// }).then((userName) =>{ // here the value which parameter is coming from previous then return return user.username  from this line
//    console.log(userName);
// }).catch(function(error){
//   console.log(error)
     
// })  // this total will give this line => Error: something went wrong which is come from here  reject('Error: something went wrong'); bcs in that code we are using error as true is make error false then it will work fine

// an another method we also used as here in chaining of then and catch to know that whetether this happen or not. this helps to know that is that haapen or not matlab ya to kuch hua h ya kuch nhi hua
// the method is fannaly() which is basicaaly a default function it will run evertime either there reolve  or rejection
// lets use it 

// const userName = promiseFour
// .then(( user) => {  // we cant do in this way means we cant store the return data in a variable here we do chainging
//   console.log(user);
//   return user.username // error un_handelled_rejection
// })
// .then((userName) =>{ // here the value which parameter is coming from previous then return return user.username  from this line
//    console.log(userName);
// })
// .catch(function(error){
//   console.log(error)
// })
// .finally(()=>{
//   console.log("The promise is either resolved or rejected");
// })


// now lets use another or alternate of .then that is assync await

// const promiseFive = new Promise( function(resolve,reject){
//    setTimeout(function(){
//     let error = true;
//     if(!error){
//       resolve({username:"javascript", password:"1234"});
//     }else{
//       reject('Error: JS went wrong');
//     }
//    })
// })

// assync await wiat for few times then do the thing and in this we don't handle  catch gracefully

// async function consumePromiseFive(){
//    const response = await promiseFive; // async we use awit before the object from where data comes
//    console.log(response);  // it gives the  'ERR_UNHANDLED_REJECTION' code runs fine but we don't hanvlde the case when an error is occured or the rejection one is execute to hanlde this we have to use try catch block
// }

// consumePromiseFive();
 
// the drawbacks of async await is its not diretly handle the errors 
// that's why we have to use the try catch block

// async function consumePromiseFive(){
//   try {
//      const response = await promiseFive;
//      console.log(response);
//   }catch(error){
//      console.log(error) // handling error gracefully
//   }
// }

// consumePromiseFive();


// now lets handle a data 

// async function getAllUsers(){
//    const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = response.json(); // string to object
//    console.log(data) //  gives error bcs we not handle the error or not using try catch
// }
// getAllUsers()

// async function getAllUsers(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = response.json();
//     console.log(data) 
//   } catch (error) {
//     console.log("E: ",error)
//   }
// }
// getAllUsers(); // pendin bcs json() method is also take some time to resolve it we have to use await with json also

// async function getAllUsers(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data) 
//   } catch (error) {
//     console.log("E: ",error)
//   }
// }
// getAllUsers(); // now it works fine


// now lets write the above function .then.catch method

// basically fetch() method s return type is Promise() so we can use .then easily

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json();
})
.then((data)=>{
  console.log(data);
}).catch((error) =>{
  console.log(error);
})


// the best thing of the above method is we don't have to
// call the try catch bcs  it is chaining and the next one method is run only when the prevous one method is return or execute