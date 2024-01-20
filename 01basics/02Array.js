const marvel_heroes = ['thore', "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes); // push dc_heros as an array in marvel_heroes i.e. array in an array
// console.log(marvel_heroes);

// console.log(marvel_heroes[3]);// dc_heroes is the thrid element of the  mravel_heors array
//  console.log(marvel_heroes[3][1]) // give the first elment of the thord element of the marvel heros array that is first element of the dc_heroes

// const allHeroes = marvel_heroes.concat(dc_heroes); // concat method combines two or more array and return an new array;
// console.log(allHeroes);

// another easy method of concat=> spread method
// const all_heros = [... marvel_heroes, ... dc_heroes];
// console.log(all_heros);


// converting and n-d array in one 1-d array or flat array

// const another_array = [1,2,3,[1,23,4],6,7,[2,3,4,[6,7]]];

// const flat_array_of_another_array = another_array.flat(2); // in flat() functon we have to give the depth of the array. we can also pass infinity and it will auto detect the depth of the array
// console.log(flat_array_of_another_array); 

// converting into array

console.log(Array.isArray("Tinku")) ; // false , bcz "Tinku " is a string

console.log(Array.from("TINKU")); // convert it into an array of char

// converting an object into array it will helpfull in real object applications

console.log(Array.from({name:"Tinku"})); // intresting

// converting more than one varaible(simple variable , array etc.) in array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));