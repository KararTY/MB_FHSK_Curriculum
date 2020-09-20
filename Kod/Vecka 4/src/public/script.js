const paragraphSelector = document.querySelector("p")

paragraphSelector.addEventListener("click", updateName)

function updateName() {
  let name = prompt("Enter a new name") || "?"

  paragraphSelector.textContent = "Player 1: " + name
}
