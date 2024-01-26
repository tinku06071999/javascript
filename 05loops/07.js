//map function

const myNUmbers = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNUmbers.map( (num) => num+10);

// or
// const newNums = myNUmbers.map( (num) => {
//     return num+10
// });

// console.log(newNums);

// for each

// const newarray = [];
// myNUmbers.forEach( (num) =>{
//     num = num+10;
//     newarray.push(num)
// });
// console.log(newarray);


/*Chaining in js :
                  basicaaly chainning is nothing but using multiple ethod in sigle line 
                  for ex. map().map().filter() 
                          map.filter()
                          filter.map()
                          etc.
Note: in chaining the value of fisrt method passed in second and so on than it will assign or print 
*/

// const newNums = myNUmbers
//                .map((num) => num*10)
//                .map((num) => num+1);  // num in this map is num*10

// console.log(newNums);

const newNums = myNUmbers
               .map((num) => num*10)
               .map((num) => num+1)  // num in this map is num*10
               .filter((num) => num >=40);
console.log(newNums);


