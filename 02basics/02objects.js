// const tinderUser = new Object() // singleton object

const tinderUser = {};

tinderUser.id = "123";
tinderUser.name = "Tinku";
tinderUser.isLoggedIn = "false";

// console.log(tinderUser);

const regulaUser = {
    email: "some@gmail.com",
    fullName: {
        usersFullName: {
            fisrtName : "Tinku",
            lastName : "Verma"
        }
    }
}

// console.log(regulaUser);
// console.log(regulaUser.fullName);
// console.log(regulaUser.fullName.usersFullName);
// console.log(regulaUser.fullName.usersFullName.fisrtName);

/*- optional chainnig : The optional chaining (?.) operator accesses an object's
                       property or calls a function. If the object accessed or function called 
                       using this operator is undefined or null, the expression short circuits and evaluates 
                       to undefined instead of throwing an error. 

     const tinkuVerma = {
         fullname: "Tinku Verma",
         age: 22,
        rollNo: "@0bcs099"
     }

                       */

    //  const tinkuVerma = {
    //     fullname: "Tinku Verma",
    //     age: 22,
    //    rollNo: "@0bcs099",
    //    address: {
    //      village: "Banipark",
    //      district: "Jaipur"
    //    }
    // }

    // const personAddress = tinkuVerma.name.village; 
    // console.log(personAddress)// throw in an error

    // const personAddress = tinkuVerma.name?.village; 
    // console.log(personAddress); // undefined
     
    // const personVillage = tinkuVerma.address?.village;
    // console.log(personVillage);

// combining two or more object 

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};

// const obj3 = {obj1, obj2}; // same problem as in array push operation

// another method of combining

// const obj3 = Object.assign(obj1, obj2); 
// const obj3 = Object.assign({},obj1, obj2); // both give sam result but this method is good to use,  {} worked as target object
/* basically assign() function takes two parameter one is target another one is soruce (i.e. assing(target, source)) and the no of source can be anything like it 
can be 2 or 3 or more so we use {} so the code is more readable if dont give this then the all the 
value of of objects will copied in the the obj1 or the object that passes fist in assgin(). */
// console.log(obj3);


// another method of combining the objects that spread operator method

// const obj3 = {...obj1, ...obj2};
// console.log(obj3);


/* When we are working on databases, databases usually return the array of oobjects
 ex. 

 const users{
    {
        id: 1,
        email:"someone@gmail.com"
    }
     {
        id: 2,
        email:"someone@gmail.com"
    }
     {
        id: 3,
        email:"someone@gmail.com"
    }
     {
        id: 4,
        email:"someone@gmail.com"
    }
     {
        id: 5,
        email:"someone@gmail.com"
    }
 }


 // accesing this objects

  const user1 = users[1].email
  */

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // return an array of all the keys of tinderuser object
console.log(Object.values(tinderUser)); // returns an array of the values of the all the keys of tinderuser object

console.log(Object.entries(tinderUser));// returns an array of array of in which every array is of the every key value pair

/*
Mnay times when we accesing values or keys from object then there is possiblity 
that that value/ key may nit exist in that object, si it is a good practice to check
before accesing that value or key that is this value present in it or not
using given below method (hasOwnProperty())
*/

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true