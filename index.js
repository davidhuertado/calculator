///TODO

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
const sumar = document.querySelector("#sumar");
const restar = document.querySelector("#restar");
const multiplicar = document.querySelector("#multiplicar");
const dividir = document.querySelector("#dividir");
const igual = document.querySelector("#igual");
let display = document.querySelector("#display-value");
let displayValue = display.textContent;
let objetoOperacion = {
  operador: undefined,
  previousValue: undefined,
};

//Funciones operadores
//Si no es undefined, llamar a la funcion operar
function pressOperator(operante, operatorButton, objetoOperacion) {
  if (objetoOperacion.previousValue === undefined) {
    objetoOperacion = {
      operador: operante.textContent,
      previousValue: display.textContent,
    };
    return objetoOperacion;
  }
  else {
    display.textContent = operar(display.textContent, objetoOperacion);
    objetoOperacion = {
      operador: operante.textContent,
      previousValue: display.textContent,
    };
    return objetoOperacion;

  }
}

sumar.addEventListener("click", () => {
  objetoOperacion = pressOperator(sumar, displayValue, objetoOperacion);
  return objetoOperacion;
});
restar.addEventListener("click", () => {
  objetoOperacion = pressOperator(restar, displayValue, objetoOperacion);
  return objetoOperacion;
});
multiplicar.addEventListener("click", () => {
  objetoOperacion = pressOperator(multiplicar, displayValue, objetoOperacion);
  return objetoOperacion;
});
dividir.addEventListener("click", () => {
  objetoOperacion = pressOperator(dividir, displayValue, objetoOperacion);
  return objetoOperacion;
});
igual.addEventListener("click", () => {
  return (display.textContent = operar(display.textContent, objetoOperacion));
});

// Funciones display number

function displayTheValue(valueToDisplay) {
  if (objetoOperacion.operador === undefined) {
    return (display.textContent += valueToDisplay);
  } else {
    return (display.textContent = valueToDisplay);
  }
}
number0.addEventListener("click", () => {
  return displayTheValue(number0.textContent);
});
number1.addEventListener("click", () => {
  return displayTheValue(number1.textContent);
});
number2.addEventListener("click", () => {
  return displayTheValue(number2.textContent);
});
number3.addEventListener("click", () => {
  return displayTheValue(number3.textContent);
});
number4.addEventListener("click", () => {
  return displayTheValue(number4.textContent);
});
number5.addEventListener("click", () => {
  return displayTheValue(number5.textContent);
});
number6.addEventListener("click", () => {
  return displayTheValue(number6.textContent);
});
number7.addEventListener("click", () => {
  return displayTheValue(number7.textContent);
});
number8.addEventListener("click", () => {
  return displayTheValue(number8.textContent);
});
number9.addEventListener("click", () => {
  return displayTheValue(number9.textContent);
});

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

function operar(valorPantalla, objetoOperacion) {
  let resultado = 0;
  if (objetoOperacion.operador === "+") {
    resultado = add(
      Number(objetoOperacion.previousValue),
      Number(valorPantalla)
    );
    return resultado;
  } else if (objetoOperacion.operador === "-") {
    resultado = substract(
      Number(objetoOperacion.previousValue),
      Number(valorPantalla)
    );
    return resultado;
  } else if (objetoOperacion.operador === "x") {
    resultado = multiply(
      Number(objetoOperacion.previousValue),
      Number(valorPantalla)
    );
    return resultado;
  } else if (objetoOperacion.operador === "/") {
    resultado = divide(
      Number(objetoOperacion.previousValue),
      Number(valorPantalla)
    );
    return resultado;
  }
}
