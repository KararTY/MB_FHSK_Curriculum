let randomNumber = Math.floor(Math.random() * 100) + 1

const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")

const guessSubmit = document.querySelector(".guessSubmit")
const guessField = document.querySelector(".guessField")

let guessCount = 1
let resetButton

function resetGame() {
  guessCount = 1

  const resetParas = document.querySelectorAll(".resultParas p")
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = ""
  }

  resetButton.parentNode.removeChild(resetButton)

  guessField.disabled = false
  guessSubmit.disabled = false
  guessField.value = ""
  guessField.focus()

  lastResultElement("white")

  randomNumber = Math.floor(Math.random() * 100) + 1
}

function setGameOver() {
  guessField.disabled = true
  guessSubmit.disabled = true
  resetButton = document.createElement("button")
  resetButton.textContent = "Start new game"
  document.body.append(resetButton)
  resetButton.addEventListener("click", resetGame)
}

function checkGuess() {
  let userGuess = Number(guessField.value)

  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: "
  }

  guesses.textContent += userGuess + " "
 
  if (guessNumberIsRandomNumber(userGuess)) {
    lastResultElement("green", "Congratulations! You got it right!")
    lowOrHiElement("")
    setGameOver()
  } else if (guessedMaxTimes(guessCount)) {
    lastResultElement("red", "!!!GAME OVER!!!")
    setGameOver()
  } else {
    lastResultElement("red", "Wrong!")
    if (userGuess < randomNumber) {
      lowOrHiElement("Last guess was too low!")
    } else if (userGuess > randomNumber) {
      lowOrHiElement("Last guess was too high!")
    }
  }

  guessCount++
  guessField.value = ""
  guessField.focus()
}

function guessNumberIsRandomNumber (userGuess) {
  return userGuess === randomNumber
}

function guessedMaxTimes (guessCount) {
  return guessCount === 10
}

function lowOrHiElement (text) {
  lowOrHi.textContent = text
}

function lastResultElement (backgroundColor, text) {
  lastResult.style.backgroundColor = backgroundColor
  lastResult.textContent = text || ""
}

guessSubmit.addEventListener("click", checkGuess)
