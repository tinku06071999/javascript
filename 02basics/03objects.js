// constructoring and destrucering objects

const course = {
    courname : "js in hindi",
    price : "999",
    courseInstructor: "Tinku Verma"
}

const {courseInstructor}  = course; // another method of accesing the object elements
console.log(courseInstructor);

const {courseInstructor : instructor}  = course; // another method of accesing the object elements using our own varibale like here we use instructor our own variable
console.log(instructor);

// api gives output as objects(json form) or may be in the form of array
// eample of an json

// {
//     "name" : "tinku verma",
//     "age" : 23,
//     "price ": "free"
// }

// in the form of array

[
    {},
    {},
    {},
    {},
    {}
]