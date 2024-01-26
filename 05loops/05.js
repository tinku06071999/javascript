/// for each loop

const coding =["js","ruby","java","python","cpp"]

// coding.forEach(function (item){  // callback function in forEach loop
//     console.log(item)
// })

// coding.forEach((item) =>{ // arrow function
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe);

// coding.forEach((item,index, arr)=>{  //printing the value key and the element of the array
//     console.log(item, index,arr);
// })


// iterating over an array of the object (most important)

const myCoding =[
    {
        langaugeName: "javascirpt",
        languageFileName:"js"

    },
    {
        langaugeName: "java",
        languageFileName:"java"

    }, 
    {
        langaugeName: "python",
        languageFileName:"py"

    }
]

myCoding.forEach((object) =>{
   console.log(object.langaugeName)
})