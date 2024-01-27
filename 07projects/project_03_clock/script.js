const clock = document.querySelector('#clock');

let date = new Date();
console.log(date)
clock.innerHTML = date.toLocaleTimeString();

// the above only show the time not auto update it untill we refersh the page
// like in clcok
// so do the above thing or update auto each second we ha ve to create a function or method
// for it we use setInterval method that auto call after a given time frame 

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString();
},1000) // 1000 is in milli second that is eaqul to one second that means it refresh or call the functin after every second