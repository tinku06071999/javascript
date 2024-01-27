#projects related to DOM

## project link

# solution code

## project 1

````javascript
// simply select all the button and then select the body beaucse we have to change the color of the body

const button = document.querySelectorAll('.button');

//now we cal select the parent of each button seperatley like below
button.forEach(function (item) {
    const parent = item.parentElement;
    // console.log(parent)
    const newColor = item.textContent
    // console.log(newColor)

})

// another method bcz we know we have to slect the body bcs we have to chabge the color of body so we select it direclty

const body = document.querySelector("body")
// console.log(body)


button.forEach(function (button) {
    // console.log(button)


    // now we have to add event on each button
    // there are many types of event like click, hover etc. here we handling the click event bcz we have to change the color of body on click
    button.addEventListener('click',function(e){

    //    console.log(e);
    //   console.log(e.target)
      const newColor = e.target.id;
    //   console.log(newColor)
      body.style.backgroundColor = newColor
    })
})```
````
