const numButton = document.querySelectorAll(".btn-num");
const opButton = document.querySelectorAll(".btn-op");
const clearButton = document.getElementById("btn-clear");

const display = document.getElementById("display");
const history = document.getElementById("history");

let firstNum;
let secondNum;
let operand;
let operandData;
let result;

numButton.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (firstNum === undefined) {
            history.innerText = 0;
            display.innerText = e.target.innerText;
            firstNum = display.innerText;
        } else if (firstNum !== undefined && secondNum === undefined && operand === undefined) {
            display.innerText += e.target.innerText;
            firstNum = display.innerText;
        } else if (operand !== undefined && secondNum === undefined) {
            display.innerText = e.target.innerText;
            secondNum = display.innerText;
        } else if (secondNum !== undefined) {
            display.innerText += e.target.innerText;
            secondNum = display.innerText;
        }
    })
})

opButton.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let value = e.target;

        if (firstNum !== undefined && secondNum === undefined && value.innerText !== "=") {
            operand = value.innerText;
            operandData = value.getAttribute("data-operation");
            history.innerText = firstNum + " " + operand;
            display.innerText = 0;
        } else if (firstNum !== undefined && secondNum !== undefined) {
            history.innerText = firstNum + " " + operand + " " + secondNum;

            if (operandData === "plus") {
                result = parseInt(firstNum) + parseInt(secondNum);
            } else if (operandData === "subtract") {
                result = parseInt(firstNum) - parseInt(secondNum);
            } else if (operandData === "multiply") {
                result = parseInt(firstNum) * parseInt(secondNum);
            } else if (operandData === "divide") {
                result = parseInt(firstNum) / parseInt(secondNum);
            }

            display.innerText = result;

            if (value.innerText === "=") {
                firstNum = undefined;
                secondNum = undefined;
                operand = undefined;
                operandData = undefined;
                result = undefined;
            } else {
                history.innerText = result + " " + value.innerText;
                display.innerText = 0;
                firstNum = result;
                operand = value.innerText;
                operandData = value.getAttribute("data-operation");
                secondNum = undefined;
            }
        }
    })
})

clearButton.addEventListener("click", clear);

function clear() {
    firstNum = undefined;
    secondNum = undefined;
    operand = undefined;
    operandData = undefined;
    result = undefined;

    history.innerText = 0;
    display.innerText = 0;
}