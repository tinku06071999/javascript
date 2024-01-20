// const myarray = [1,3,"TInku",7+8]; // valid but not a good way of programming

/* when we do copy operation on array in js then it
 int will create the shallow copy 

    1. shallow copy: a shallow copy of an object is a copy 
                     whose properties share the same reference
                     (point to the same underkying value) as of the 
                     source object from which  the cipy was made.
                     it means when do changes then then the change also reflect in 
                     original array 
 deep copy: properties do not share the same reference.
                  it means changes not reflect in original array at 
                  original refence
                     */
    
const myarray = [1,2,3,4,5];

const myheroes = ["Tinku","ironman"];

// another method of declaring array

const myarray2 = new Array(1,2,3,4);

// console.log(myarray[2]); // print 3 which is at index 2 in myarray

// array methods

// myarray.push(6);
// console.log(myarray); // print the whole array

// myarray.pop() // remove last value of arrray

// console.log(myarray);

// myarray.unshift(23);  // unshift method add value at strting and shift the value from starting to end 
// console.log(myarray);

// myarray.shift(); // remove first elment and shift all the element towards index 0
// console.log(myarray);

// console.log(myarray.includes(9)); // return false if not exixst
// console.log(myarray.includes(4)); // return true if exist
// // most important thing of includes method is it returns the boolean datatypes

// console.log(myarray.indexOf(9)); // return -1 if not exists;
// console.log(myarray.indexOf(4)); // return index of 4

// const newarr = myarray.join(); // join converts array in a string 
// console.log(myarray);
// console.log(newarr); 

// slice and splice method

console.log("A ",myarray);
const newarr1 = myarray.slice(1,3); // splice method will add the element from index 1(inclusive)
                                    // to index 3(not inclusive ) to newarr1 without manuplating or removing the original array
console.log(newarr1);
console.log("B ", myarray);

const newarr2 = myarray.splice(1,3); // splice method will put the element from index 1(inclusive) to index 3(inclusive ) in 
                                     // newarr2 and manulpating or remove the element from the myarray(i.e. original array)
console.log("C ", myarray);
console.log(newarr2);


