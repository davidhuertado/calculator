
//Variables de botones
const number0 = document.querySelector("#zero");
const number1 = document.querySelector("#one");
const number2 = document.querySelector("#two");
const number3 = document.querySelector("#three");
const number4 = document.querySelector("#four");
const number5 = document.querySelector("#five");
const number6 = document.querySelector("#six");
const number7 = document.querySelector("#seven");
const number8 = document.querySelector("#eight");
const number9 = document.querySelector("#nine");
const displayValue = document.querySelector("#display-value");








// Funciones display number
number0.addEventListener("click", () => {
    return displayTheValue(displayValue, number0.textContent);
});
number1.addEventListener("click", () => {
    return displayTheValue(displayValue, number1.textContent);
});
number2.addEventListener("click", () => {
    return displayTheValue(displayValue, number2.textContent);
});
number3.addEventListener("click", () => {
    return displayTheValue(displayValue, number3.textContent);
});
number4.addEventListener("click", () => {
    return displayTheValue(displayValue, number4.textContent);
});
number5.addEventListener("click", () => {
    return displayTheValue(displayValue, number5.textContent);
});
number6.addEventListener("click", () => {
    return displayTheValue(displayValue, number6.textContent);
});
number7.addEventListener("click", () => {
    return displayTheValue(displayValue, number8.textContent);
});
number8.addEventListener("click", () => {
    return displayTheValue(displayValue, number8.textContent);
});
number9.addEventListener("click", () => {
    return displayTheValue(displayValue, number9.textContent);
});

function displayTheValue(displayValue, valueToDisplay) {
    return displayValue.textContent = valueToDisplay;
 }
 

//Funciones de operadores
function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operates(a, b, operator) {
    return operator(a, b);
}