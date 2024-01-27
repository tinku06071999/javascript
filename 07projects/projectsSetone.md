#projects related to DOM

## project link

# solution code

## project 1

```javascript
// simply select all the button and then select the body beaucse we have to change the color of the body

const button = document.querySelectorAll(".button");

//now we cal select the parent of each button seperatley like below
button.forEach(function (item) {
  const parent = item.parentElement;
  // console.log(parent)
  const newColor = item.textContent;
  // console.log(newColor)
});

// another method bcz we know we have to slect the body bcs we have to chabge the color of body so we select it direclty

const body = document.querySelector("body");
// console.log(body)

button.forEach(function (button) {
  // console.log(button)

  // now we have to add event on each button
  // there are many types of event like click, hover etc. here we handling the click event bcz we have to change the color of body on click
  button.addEventListener("click", function (e) {
    //    console.log(e);
    //   console.log(e.target)
    const newColor = e.target.id;
    //   console.log(newColor)
    body.style.backgroundColor = newColor;
  });
});
```

## project 2 solution

```javascript
const form = document.querySelector("form");

// when we submit a form or something else then it will go to the broswer now we have to stop t

form.addEventListener("submit", function (e) {
  //stop the default action like sending data on browser etc.
  e.preventDefault();
  const height = parseFloat(document.querySelector("#height").value); // parseFloat wiil convert number that we reciverd in string form to float form
  // console.log(height)
  const weight = parseFloat(document.querySelector("#weight").value);
  //   console.log(weight);

  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter a Valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter a Valid weight ${weight}`;
  } else {
    // calculating BMI
    const res = (weight / ((height * weight) / 10000)).toFixed(2);
    results.innerHTML = `<span>${res}</span>`;
  }

  // based on the result manuplate the BMI weight Guide
  const BMI = (weight / ((height * weight) / 10000)).toFixed(2);
  if (BMI < 18.6) {
    const underweight = document.querySelector("#underweight");
    //   console.log(underweight);
    underweight.style.color = "red";
    results.innerHTML = `result: ${BMI}</br>${underweight.textContent}`;
  } else if (BMI >= 18.6 && BMI <= 24.9) {
    const normal = document.querySelector("#normal");
    //    console.log(normal)
    normal.style.color = "green";
    results.innerHTML = `result: ${BMI}</br>${normal.textContent}`;
  } else {
    const overweight = document.querySelector("#overweight");
    // console.log(overweight);
    overweight.style.color = "red";
    results.innerHTML = `result: ${BMI}</br>${overweight.textContent}`;
  }
});
```

## project 3

```javascript
const clock = document.querySelector("#clock");

let date = new Date();
console.log(date);
clock.innerHTML = date.toLocaleTimeString();

// the above only show the time not auto update it untill we refersh the page
// like in clcok
// so do the above thing or update auto each second we ha ve to create a function or method
// for it we use setInterval method that auto call after a given time frame

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // 1000 is in milli second that is eaqul to one second that means it refresh or call the functin after every second
```

## project 04

```javascript
//  const form = document.querySelector('form')
//  console.log(form)
//   console.log(document.querySelector('#wrapper'))
//   form.addEventListener('submit',function(e){
//     e.preventDefault();
//     const GuessNum = document.querySelector('#guessField').value;
//     console.log(GuessNum);

//    const number = Math.round(Math.random() * 100 + 1)
//    console.log(number)
//    if(number === GuessNum)console.log("You win");
//    else console.log("better luck next time");

//    const previousguesses = document.querySelector('#guesses');
//    previousguesses.innerHTML = GuessNum;

// let remainguess = parseInt(document.querySelector('#lastResult').textContent)-1
//   console.log(remainguess)
//   remainguess.content = remainguess
//   console.log(remainguess.content);
//   console.log(remainguess.textContent);
//   console.log(remainguess.innerHTML);
// })

//lets genareate a randim number

let randomNUmber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");

const guessSlot = document.querySelector(".guesses");
const remaingSlot = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];

let numGuessses = 1;

let playGame = true;

// till now we gather all the information
// now lets create some function

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  // validating input
  if (isNaN(guess)) {
    alert("Please Enter a valid number");
  } else if (guess < 1) {
    alert("please enter a number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuessses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. random number was ${randomNUmber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // cheking guess right or wrong
  if (guess == randomNUmber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNUmber) {
    displayMessage(`Number id Tooo low`);
  } else if (guess > randomNUmber) {
    displayMessage(`Number is Too high`);
  }
}

function displayMessage(message) {
  // printing msg in loorhi
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  userInput.value = ""; // cleaning the user inpur from box
  guessSlot.innerHTML += `${guess} , `;
  numGuessses++;
  remaingSlot.innerHTML = `${11 - numGuessses}`;
}

function endGame() {
  userInput.value = ""; // setting usrinput value empty
  userInput.setAttribute("disabled", ""); // setting a dsisbled attribute to prevent the new entrty
  // now lets create some elment to show when game is over like to show a button to start game
  p.classList.add("button");
  p.innerHTML = `<h2 id = "newGame"> Start new Game</h2>`;
  // document.getElementById('newGame').style.cursor = 'pointer';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  //   console.log(newGameButton)
  newGameButton.addEventListener("click", function (e) {
    randomNUmber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuessses = 1;
    guessSlot.innerHTML = "";
    remaingSlot.innerHTML = `${11 - numGuessses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
```
