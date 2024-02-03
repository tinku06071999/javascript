function multiplyByFive(n){
    return (n*n);
}

// multiplyByFive.power = 2;
// console.log(multiplyByFive(5)); // 25
// console.log(multiplyByFive.power); // 2
// console.log(multiplyByFive.prototype);  // {}

// protypal inheritence : Javascript take function , array , strign etc. to  further and further when we talk about the prortype and it is known as protypal inheriatece


function createUser(username, score){
    this.username = username;
    this.score = score;
} 

// decalring our own function in prototype

// in below  method we decalring a protype incremanet for createUser function 

// createUser.prototype.increament = function(){
//     score++;
// }

// const chai = createUser("chai", 25);
// const tea = createUser("tea", 250);

// console.log(chai);
// console.log(tea);

// now the increamnet protype will consfuse and dont know which score it have to
// increse like for tea or for chai
// to solve this we have to use the context i.e this

createUser.prototype.increament = function(){
    this.score++;
}

// create another method to print
createUser.prototype.print = function(){
    console.log(`${this.score}`);
}
// const chai =  createUser("chai", 25);
// const tea = createUser("tea", 250);
// console.log(chai.score); // undefined
// console.log(tea.score); // undefined

// chai.print(); // error tyring to read undeifned properties

// to solve the above problems we have to use the new keyword

const chai =  new createUser("chai", 25);
const tea =  new createUser("tea", 250);

// chai.print(); // 25
// tea.print();  // 250
// chai.increament();
// tea.increament();

chai.print(); // 26
tea.print();  // 251

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the 
constructor function. This means that it has access to properties and methods defined on the 
constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and 
this is bound to the newly created object. If no explicit return value is specified from the 
constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return 
a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/