const numButton = document.querySelectorAll(".btn-num");
const opButton = document.querySelectorAll(".btn-op");

const display = document.getElementById("display");
const history = document.getElementById("history");

let firstNum;
let secondNum;
let operand;

numButton.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (firstNum === undefined) {
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
        let value = e.target.innerText.toString();
        console.log(value);
        if (firstNum !== undefined && secondNum === undefined && value !== "=") {
            operand = e.target.innerText;
            history.innerText = firstNum + " " + operand;
            display.innerText = 0;
        } else if (firstNum !== undefined && secondNum !== undefined) {
            if (value === "=") {
                history.innerText = firstNum + " " + operand + " " + secondNum;
                if (value === "") {

                }
            }
        }
    })
})