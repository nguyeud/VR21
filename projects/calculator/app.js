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
        let value = e.target;

        if (display.innerText.length < 10) {                            // display.innerText < 10 char
            if (display.innerText == 0 && value.innerText != 0) {       // Update display if 0 isn't pressed when display is 0
                if (firstNum === undefined) {
                    history.innerText = 0;
                    display.innerText = value.innerText;
                    firstNum = display.innerText;
                } else if (firstNum !== undefined && secondNum === undefined && operand === undefined) {
                    display.innerText += value.innerText;
                    firstNum = display.innerText;
                } else if (operand !== undefined && secondNum === undefined) {
                    display.innerText = value.innerText;
                    secondNum = display.innerText;
                } else if (secondNum !== undefined) {
                    display.innerText += value.innerText;
                    secondNum = display.innerText;
                }
            } else if (display.innerText != 0) {                            // Update displays
                if (firstNum === undefined) {
                    history.innerText = 0;
                    display.innerText = value.innerText;
                    firstNum = display.innerText;
                } else if (firstNum !== undefined && secondNum === undefined && operand === undefined) {
                    display.innerText += value.innerText;
                    firstNum = display.innerText;
                } else if (operand !== undefined && secondNum === undefined) {
                    display.innerText = value.innerText;
                    secondNum = display.innerText;
                } else if (secondNum !== undefined) {
                    display.innerText += value.innerText;
                    secondNum = display.innerText;
                }
            }
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
                result = parseFloat(firstNum) + parseFloat(secondNum);
            } else if (operandData === "subtract") {
                result = parseFloat(firstNum) - parseFloat(secondNum);
            } else if (operandData === "multiply") {
                result = parseFloat(firstNum) * parseFloat(secondNum);
            } else if (operandData === "divide") {
                result = parseFloat(firstNum) / parseFloat(secondNum);
            }

            console.log(result);
            let notation;
            let first;
            let second;
            let third;
            let fourth;
            // If result > 10 characters due to large-ness
            if (result.toString().length > 10 && result > 1) {
                first = result.toString()[0];
                second = result.toString()[1];
                third = result.toString()[2];
                fourth = result.toString()[3];

                notation = result.toString().length - 1;

                if (fourth > 4) {
                    third = parseInt(third) + 1;

                    if (third == 10) {
                        third = "0";
                        second = parseInt(second) + 1;

                        if (second == 10) {
                            second = "0";
                            first = parseInt(first) + 1;
                        }
                    }
                }

                result = first.toString() + "." + second.toString() + third.toString() + "e" + notation.toString();
            } else if (result.toString().length > 10 && result < 1) {
                // If result is a very very very small number
                let notationExists = result.toString().indexOf("e");

                // If notation already exists
                if (notationExists !== -1) {
                    result.toString().slice(notation);
                    notation = result.toString().slice(notationExists + 2);
                    first = result.toString()[0];
                    second = result.toString()[2];
                    third = result.toString()[3];
                    fourth = result.toString()[4];

                    if (fourth > 4) {
                        third = parseInt(third) + 1;
    
                        if (third == 10) {
                            third = "0";
                            second = parseInt(second) + 1;
    
                            if (second == 10) {
                                second = "0";
                                first = parseInt(first) + 1;
                            }
                        }
                    }
                    
                    result = first.toString() + "." + second.toString() + third.toString() + "e-" + notation.toString();
                } else {
                    let notation;
                    let i = result;

                    // get number of zeros before hitting > 1
                    notation = 0;
                    while(i < 1) {
                        i *= 10;
                        notation++;
                    }

                    first = result.toString()[notation + 1];
                    second = result.toString()[notation + 2];
                    third = result.toString()[notation + 3];
                    fourth = result.toString()[notation + 4];

                    if (fourth > 4) {
                        third = parseInt(third) + 1;

                        if (third == 10) {
                            third = "0";
                            second = parseInt(second) + 1;

                            if (second == 10) {
                                second = "0";
                                first = parseInt(first) + 1;
                            }
                        }
                    }

                    result = first.toString() + "." + second.toString() + third.toString() + "e-" + notation.toString();
                }
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