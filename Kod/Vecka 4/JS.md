# Javascript
Programmering!

<img src="https://media.prod.mdn.mozit.cloud/attachments/2016/07/12/13502/a1177377210a8bd83a8e99da934d959c/cake.png">

* HTML - Upplägget för dokumentet.

```html
<p>Player 1: Chris</p>
```

* CSS - Dokumentets stil.

```css
p {
  font-family: 'helvetica neue', helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  padding: 3px 10px;
  display: inline-block;
  border: 2px solid purple;
  border-radius: 10px;
  background: pink;
  color: blue;
}
```

* JavaScript - Dynamiska dokument interaktioner.

```js
const paragraphSelector = document.querySelector("p")

paragraphSelector.addEventListener("click", updateName)

function updateName() {
  let name = prompt("Enter a new name") || "?"

  paragraphSelector.textContent = "Player 1: " + name
}
```

[Exempel dokument.](src/example.html)

## Introduktion

**Programmeringsvärldens 3 punkter:**

* Sekvensering - **Sequencing** - Order, Följd
* Selektion - **Selection** - Frågor, Påståenden
* Iteration - **Iteration** - Upprepning

* **Sequencing**

```js
let schoolName = "Marieborg"
let cityName = "Norrköping"

console.log(schoolName + " in " + cityName)

// Marieborg in Norrköping
```

*Två variabler, och en utskrivning till konsollen. En sekvens av kod.*

* **Selection**

```js
let studentAge = 18

if (studentAge >= 18) {
  // Allow student to join Marieborg.
  console.log("Welcome, you can join.")
} else {
  // Tell student they're too young for Marieborg.
  console.log("You're too young, you can't join.")
}
```

*En variabel, och ett "if" påstående.*

```js
let studentAge = 18

if (studentAge < 18) {
  console.log("You're less than 18 years old.")
} else if (studentAge === 18) {
  console.log("You're 18 years old.")
} else {
  console.log("You're older than 18 years.")
}
```

*En variabel, två "if" påståenden varav en är "else if".*


* **Iteration**

```js
let number = 7

console.log("Multiplication table for 7.")

for (let index = 1; index <= 10; index += 1) {
  console.log(number * index)
}
```

*En variabel och en loop med en variabel kallad "index".

```js
for (
  let index = 1; // Ge en fördefinierad variabel med start number.
  index <= 10; // Avbryt när detta påstående slutar stämma
  index++ // Fortsätt loopen genom att öka den fördefinierade variabeln.
) {
  // Utför kod för varje loop.
}
```

* Variabler - **Variables**
* Ord/Text - **Strings**
* Nummer - **Numbers**

* **Variabler**

```js
let x
let y

let f = x + y

x = 1
y = 1

console.log(f)
// NaN

f = x + y

console.log(f)
// 2
```

***Sekvensering är viktig!***

* **Ord/Text**

```js
let z = "Norrköping"

console.log(z + " <3")

// Norrköping <3

console.log(z)

// Norrköping

z += " <3"

console.log(z)

// Norrköping <3

z -= " <3"

console.log(z)

// NaN

z = "Norrköping <3"

console.log(z)

// Norrköping <3

z = z.replace("Norrköping", "Finspång")

console.log(z)

// Finspång <3
```

* **Nummer**

```js
let x = 1
let y = 1

y++
x++

y += 2
x += 2
```

```js
let x = 0

x--
```

```js
let x = 1
let y = "1"

if (x == y) {
  console.log(true)
} else {
  console.log(false)
}
```

```js
let x = 1
let y = "1"

if (x === y) {
  console.log(true)
} else {
  console.log(false)
}
```

```js
let x = "1"

// Förvandla en string till ett number.
let y = Number(x)

// Förvandla ett number till en string.
let z = String(y)
```

## MDN tutorial

[MDN länk.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash)

## Finare kod med funktioner

```js
let studentAge = 18

function isAdultAge (age) {
  return age >= 18
}

if (isAdultAge(studentAge)) {
  // Allow student to join Marieborg.
  console.log("You can join Marieborg.")
} else {
  // Tell student they're too young for Marieborg.
  console.log("You're too young, you can't join Marieborg.")
}
```
