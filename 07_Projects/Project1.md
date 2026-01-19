# Projects Related To DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-hgn3lfqg?file=index.html)


# Solution Code 

## Project 1 

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```



## Project 2


```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please Give a Valid Height ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please Give a Valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);

    //show the result
    if (bmi <= 18.6) {
      results.innerHTML = `<span> Under Weight : ${bmi}</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span> Normal Weight : ${bmi}</span>`;
    } else if (bmi >= 24.9) {
      results.innerHTML = `<span> Over Weight : ${bmi}</span>`;
    }
  }
});


```


## Project 3 
```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## Project 4
```javascript
let randomNo = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];

let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter an valid number.');
  } else if (guess < 1) {
    alert('Please Enter an valid number greater then 1.');
  } else if (guess > 100) {
    alert('Please Enter an valid number smaller then 100.');
  }
  prevGuess.push(guess);
  if (numGuess === 11) {
    displayGuess(guess);
    displayMessage(`Game Over , Random number was ${randomNo}`);
    endGame();
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randomNo) {
    displayMessage(`You Have Guessed It Right.`);
    endGame();
  } else if (guess != randomNo) {
    displayMessage(`You Have Guessed It Wrong`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}
function displayMessage(meassage) {
  lowOrHi.innerHTML = `<h2>${meassage}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNo = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```