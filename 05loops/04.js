const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

// for (const key in myObject) {
//     console.log(key) // js cpp rb swift
// }

// acdesing both the key and values

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }


// applying for in loop on array

// const myarray = [100,256,367,4334,5454]

// for (const key in myarray) {
//    console.log(`${key}th elment is ${myarray[key]}`)
// }

// for in loop on map

// const map = new Map()

// map.set('IN',"India");
// map.set('USA',"United state of america");
// map.set('fr',"France");

// for (const key in map) {
//     console.log(`${key} and value is ${map[key]}`) // nothing will print bcz map is not iterable
// }