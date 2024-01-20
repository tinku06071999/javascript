/* Object :
            two way to declare the objects
            1. litterale (multiple instances of the object)
            2. constructor (singleton)

object litters : way of decalring objects
*/

// creating a symbol variable
  const mySym = Symbol("key1");

// method to decalre objects in object litterls

const Jsuser = {
   name:"TInku ",
   "full name" : "Tinku Verma",
   [mySym]: "myKey1",
   age: 23,
   location: "Jaipur",
   email: "2019tinkuverma@gmail.com",
   isLoggedIn: false,
   lastLoginDays:["Monday", "Sunday"]
} 

/* we can overwrite the value of object mebor 
by assining new values to them*/
// Jsuser.email = "tinku049@gmail.com"

/* if we want that no one can modify the value 
of object mebor than we can freeze the object 
after that we cant modify the object membor's values */
// Object.freeze(Jsuser);


// acees method of objects
// console.log(Jsuser.email)

// console.log(Jsuser["email"])

// console.log(Jsuser.full name) 

/* we cant access full name like above 
thats why we used the the below method to print it.
*/
// console.log(Jsuser["full name"])
/** now if want to update the value
 * than it will not propagate means it will not show
 * any error but it will not update the value of
 * that membor
 */
// Jsuser.name = "Rahul" // not update name beacuse we freeze the object

// how to acces symbol
// console.log(Jsuser[mySym])


// console.log(Jsuser);

// using functions with objects

Jsuser.greeting = function(){
    console.log("Helllo mr verma");
}

// console.log(Jsuser.greeting) // function return back

console.log(Jsuser.greeting()) ;

Jsuser.greeting2 = function(){
    console.log(`hello mr.${this.name}`) // `` used for string interplotion
}

console.log(Jsuser.greeting2())

