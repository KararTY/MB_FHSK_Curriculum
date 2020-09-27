# Manus

[https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash)

## Setup

* `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gissa numret!</title>
</head>
<body>
  <script src="gissanumret.js"></script>
</body>
</html>
```

## Variabler

* `gissanumret.js`

```js
let randomNumber = Math.floor(Math.random() * 100) + 1

const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const guessSubmit = document.querySelector('.guessSubmit')
const guessField = document.querySelector('.guessField')

let guessCount = 1
let resetButton
```

* `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gissa numret!</title>
</head>
<body>
  <h1>Gissa numret!</h1>
  <p>Vi har valt ett slumpmässigt nummer mellan 1 och 100.Se om du kan gissa numret inom 10 försök eller mindre. Du får reda på om din gissning är för hög eller för låg.</p>

  <label for="guessField">Skriv in din gissning: </label>
  <input type="number" max="100" min="1" id="guessField" class="guessField">
  <input type="submit" value="Skicka gissning" class="guessSubmit">

  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  <script src="gissanumret.js"></script>
</body>
</html>
```

## Funktioner

* `gissanumret.js`

```js
function checkGuess() {
  alert('I am a placeholder')
}
```

## "Operators"

### "Arithmetic operators"

* `+` Addition

`6 + 9`
* `-` Subtraktion

`100 - 50`
* `*` Multiplikation

`2 * 4`
* `/` Division

`10 / 5`

### "Comparison operators"

* `===` - Lika med.

```js
5 === 2 + 4 // false
'Chris' === 'Bob' // false
5 === 2 + 3 // true
2 === '2' // false; number versus string
```

* `!==` - Inte lika med.

```js
5 !== 2 + 4 // true
'Chris' !== 'Bob' // true
5 !== 2 + 3 // false
2 !== '2' // true; number versus string
```

* `<` - Mindre än.

```js
6 < 10 // true
20 < 10 // false
```

* `>` - Mer än.

```js
6 > 10 // false
20 > 10  // true
```

## "Conditionals"

* Ändra föregående funktion "checkGuess()" i `gissanumret.js` till följande kod:

```js
function checkGuess() {
  let userGuess = Number(guessField.value)
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: '
  }
  guesses.textContent += userGuess + ' '
 
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!'
    lastResult.style.backgroundColor = 'green'
    lowOrHi.textContent = ''
    setGameOver()
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!'
    setGameOver()
  } else {
    lastResult.textContent = 'Wrong!'
    lastResult.style.backgroundColor = 'red'
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!'
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!'
    }
  }
 
  guessCount++
  guessField.value = ''
  guessField.focus()
}
```

## Events

* `gissanumret.js`

```js
let randomNumber = Math.floor(Math.random() * 100) + 1

const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const guessSubmit = document.querySelector('.guessSubmit')
const guessField = document.querySelector('.guessField')

let guessCount = 1
let resetButton

function checkGuess() {
  let userGuess = Number(guessField.value)
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: '
  }
  guesses.textContent += userGuess + ' '
 
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!'
    lastResult.style.backgroundColor = 'green'
    lowOrHi.textContent = ''
    setGameOver()
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!'
    setGameOver()
  } else {
    lastResult.textContent = 'Wrong!'
    lastResult.style.backgroundColor = 'red'
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!'
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!'
    }
  }
 
  guessCount++
  guessField.value = ''
  guessField.focus()
}

function setGameOver() {
  guessField.disabled = true
  guessSubmit.disabled = true
  resetButton = document.createElement('button')
  resetButton.textContent = 'Start new game'
  document.body.append(resetButton)
  resetButton.addEventListener('click', resetGame)
}

function resetGame() {
  guessCount = 1

  const resetParas = document.querySelectorAll('.resultParas p')
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = ''
  }

  resetButton.parentNode.removeChild(resetButton)

  guessField.disabled = false
  guessSubmit.disabled = false
  guessField.value = ''
  guessField.focus()

  lastResult.style.backgroundColor = 'white'

  randomNumber = Math.floor(Math.random() * 100) + 1
}

guessSubmit.addEventListener('click', checkGuess)
```

## Finare kod med flera funktioner!

* Se om du kan flytta och separera koden i flera funktioner! Titta på [Vecka 4](../Vecka%204/src/public/guessthenumber.js) för hjälp.
