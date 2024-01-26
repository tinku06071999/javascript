//array.reduce()
const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)  // 0 is the initial value for acc and in every iteration acc = acc + currval  and currval is array value from strting
// console.log(myTotal)

// simple application of the reduce() method is in shopping cart. when addding items and price adding to its total


// reduce() method with arrow function

// const myTotal = myNums.reduce((acc, currval) =>(acc + currval),0)

// console.log(myTotal)


const shoppingCart = [
    {
        itemname: "jsCourse",
        price: 2000
    },
    {
        itemname: "python",
        price: 1000
    }, 
    {
        itemname: "java",
        price: 1200
    }, 
    {
        itemname: "Android development",
        price: 6000
    }
]

// adding all the price in shoppping in cart

const totalSum = shoppingCart.reduce((acc,item)=> (acc + item.price),0);
console.log(totalSum);