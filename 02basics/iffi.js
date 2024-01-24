// immediately invoked function expression (IIFE)
// it is used to avoid the pollution of global scope

// (function chai(){  // named iffe
//     console.log(`DB connected`)
// })();

// IFFE as arrow function

// ( chai = () =>{
//     console.log(`DB connected`)
// })();


// ( () =>{
//     console.log(`DB connected`)
// })();


// iffi with parameters

( (name) =>{
    console.log(`DB connected ${name}`);
})("Tinku");