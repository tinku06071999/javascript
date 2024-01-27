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

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField'); 

const guessSlot = document.querySelector('.guesses');
const remaingSlot = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];

let numGuessses = 1;

let playGame = true;

// till now we gather all the information
// now lets create some function

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    // validating input 
    if(isNaN(guess)){
        alert("Please Enter a valid number");
    }else if(guess < 1){
        alert("please enter a number greater than 1")
    }else if(guess > 100){
        alert("Please enter a number less than 100")
    }
    else{
        prevGuess.push(guess);
        if(numGuessses === 11){
            displayGuess(guess);
            displayMessage(`Game Over. random number was ${randomNUmber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    // cheking guess right or wrong 
    if(guess == randomNUmber){
    displayMessage(`You guessed it right`);
    endGame();
    }else if(guess < randomNUmber){
       displayMessage(`Number id Tooo low`)
    }else if(guess > randomNUmber){
        displayMessage(`Number is Too high`)
    }

}

function displayMessage(message){
  // printing msg in loorhi
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
   userInput.value = ''; // cleaning the user inpur from box
   guessSlot.innerHTML += `${guess} , `;
   numGuessses++;
   remaingSlot.innerHTML = `${11 -numGuessses }`;
}

function endGame(){
    userInput.value='' // setting usrinput value empty
    userInput.setAttribute('disabled', ''); // setting a dsisbled attribute to prevent the new entrty
    // now lets create some elment to show when game is over like to show a button to start game
    p.classList.add('button') ;
    p.innerHTML = `<h2 id = "newGame"> Start new Game</h2>`;
    // document.getElementById('newGame').style.cursor = 'pointer';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
  const newGameButton = document.querySelector('#newGame');
//   console.log(newGameButton)
  newGameButton.addEventListener('click',function(e){
     randomNUmber = parseInt(Math.random() * 100 + 1);
     prevGuess = [];
     numGuessses = 1;
     guessSlot.innerHTML = '';
     remaingSlot.innerHTML = `${11 -numGuessses }`;
     userInput.removeAttribute('disabled');
     startOver.removeChild(p);
     playGame = true;
  })
}