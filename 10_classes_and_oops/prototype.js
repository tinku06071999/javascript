
// const trimString = function( str){
//     this.str = str;
// }

// trimString.prototype.trueLength = function( str ){
//     // let len = 0;
//     let count =0;
//     for(let i = 0; i<this.str.length;i++){
//         if(this.str [i] != ' '){
//             count++;
//         }else{
//             continue;
//         }
//     }
//     return count;
// }
// let s1 = "Tinku    "
// const str1 = new trimString(s1);

// console.log(s1.length);

// console.log(str1.trueLength());

// now lets design our own string trim method

let myHeros = ["thor","spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        // console.log(`spidy powe is ${this.spiderman}`);
    }
}

// every data type like array string etc. passes through object in prototype 
// so let direclty declare prototype on 
// here we declare a protype name tinku 
Object.prototype.tinku = function(){
    // console.log(`tinku is  present in all objects`);
}
// heroPower.tinku(); // working good means it is applicable on object


// now we know that a protype that is applicable on object is also applicable on array , string etc 
//
// lets check it on array myHeros

// myHeros.tinku() // working


// inhertence or prtotypal nheritence
// basically when declare some custome prototypes for an object as above 
// then these protyytpes are applicable only on that object 
// to make them applicalbe we use the protypal inheritence concept
// for it we have t use a method __proto__
const User = {
    name: "tinku",
    email: "tinku@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
  isAvailable: false 
}

const TASupport = {
    nakeAssignment: 'JS assignment',
    fullTime: true,

    // now want to acces the properties of  TeachinSupprt object 
    // for it we have to use the __proto__ method as below
    __proto__ : TeachingSupport
}

// derive some protperties from user in Teacher 

Teacher.__proto__ = User; // Teacher an acces the properties of user

// the above methos is traditional method 
// now a days we are using setProtypeOf() method 
// it have to parametrs in it one is which one want acces and another on from which 
// basically first is child class and second one is base class or object

Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport can acces the properties of teacher


// now we have the idea how to declare trueLength  protype that is applicable on any string 

String.prototype.trueLength = function(){
    console.log(`${this}`); // what ever strng we recive like here it is Tinku
    console.log(`True length is : ${this.trim().length}`); 
}

str1 = "Tinku   ";
str1.trueLength();
