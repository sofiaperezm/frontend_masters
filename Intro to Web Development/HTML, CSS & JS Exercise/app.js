var screenValue = "0";
const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener("click", addNumberToScreen));
const clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", clearScreen)
const deleteButton = document.querySelector(".delete")
deleteButton.addEventListener("click", deleteLastCharacter)

function updateScreenValue(value) {
    screenValue = value;
    document.querySelector(".screen").innerHTML = screenValue
};

function addNumberToScreen(event) {
    const number = event.target.innerText
    const newValue = screenValue === "0" ? number : screenValue + number
    updateScreenValue(newValue)
};

function clearScreen() {
    initalValue = "0"
    updateScreenValue(initalValue)
}

function deleteLastCharacter(event) {
    const newValue = screenValue.length === 1 ? "0" : screenValue.slice(0, -1)
    updateScreenValue(newValue)
};

