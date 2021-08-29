var screenValue = "0";
var currentOperator = null;
var accumulator = {};
const elements = document.querySelectorAll(".value");
elements.forEach(element => element.addEventListener("click", addValueToScreen));
const clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", clearScreen)
const deleteButton = document.querySelector(".delete")
deleteButton.addEventListener("click", deleteLastCharacter)
const equalsButton = document.querySelector(".equals")
equalsButton.addEventListener("click", computeOperation)

function updateScreenValue(value) {
    screenValue = value;
    document.querySelector(".screen").innerHTML = screenValue
};

function addValueToScreen(event) {
    const operators = ["+", "-", "*", "÷"]
    const value = event.target.innerText
    if (screenValue === "0") {
        if (!operators.includes(value)) {
            updateScreenValue(value)
        } 
        return
    }
    
    const lastValue = screenValue[screenValue.length-1]
    if (operators.includes(lastValue) && operators.includes(value)) {
        return
    }

    updateScreenValue(screenValue + value)
};

function clearScreen() {
    initalValue = "0"
    updateScreenValue(initalValue)
};

function deleteLastCharacter(event) {
    const newValue = screenValue.length === 1 ? "0" : screenValue.slice(0, -1)
    updateScreenValue(newValue)
};

function computeOperation(event) {
    const str = screenValue.replace("÷","/").replace(/[^-()\d/*+.]/g, '');
    const newValue = eval(str)
    updateScreenValue(newValue)
}

