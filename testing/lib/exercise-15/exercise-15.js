// Find DOM element and hold onto it, so we don't have to search for it
// every time we use it.
const calcForm = document.getElementById("calc-form");
const inputAmount = document.getElementById("loan-amount");
const inputYears = document.getElementById("loan-years");
const inputRate = document.getElementById("loan-rate");
const result = document.getElementById("calc-monthly-payment");

/** Retrieve form values. Returns object: {amount, years, rate}. */
function getFormValues() {
    return {
        "amount": parseFloat(inputAmount.value),
        "years": parseFloat(inputYears.value),
        "rate": parseFloat(inputRate.value)
    }
}

/** Calculate monthly payment and return. */
function calcMonthlyPayment(amount, years, rate) {
    const P = amount;
    const i = (rate / 100) / 12;
    const n = Math.floor(years * 12);       // convert to integer

    return (P * i) / (1 - Math.pow(1 + i, -n));
}

/** Get form values, calculate, format to 2 decimal places, and display. */
function getFormValuesAndDisplayResults() {
    const {amount, years, rate} = getFormValues();
    const payment = calcMonthlyPayment(amount, years, rate);

    result.innerText = "$" + payment.toFixed(2);
}

/** Set initial form values and show initial results. Called at app start. */
function setInitialValues() {
    inputAmount.value = "10000";
    inputYears.value = "10";
    inputRate.value = "4.5";
}

/** Start: set form defaults & display; attach form submit event listener. */
function start() {
    setInitialValues();

    calcForm.addEventListener("submit", e => {
        e.preventDefault();

        getFormValuesAndDisplayResults();
    })
}

start();