///TODO

//Variables de botones
const clear = document.querySelector("#c");
const punto = document.querySelector("#punto");
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
let displayValor = display.textContent;
let objetoOperacion = {
  operador: undefined,
  valorAnterior: undefined,
  valorGuardado: false,
};

//Funciones operadores
//Si no es undefined, llamar a la funcion operar
function presionarOperador(operante, objetoOperacion) {
  if (objetoOperacion.valorAnterior === undefined) {
    objetoOperacion = {
      operador: operante.textContent,
      valorAnterior: display.textContent,
      valorGuardado: true,
    };
    return objetoOperacion;
  } else {
    display.textContent = operar(display.textContent, objetoOperacion);
    objetoOperacion = {
      operador: operante.textContent,
      valorAnterior: display.textContent,
      valorGuardado: true,
    };
    return objetoOperacion;
  }
}

sumar.addEventListener("click", () => {
  objetoOperacion = presionarOperador(sumar, objetoOperacion);
  return objetoOperacion;
});
restar.addEventListener("click", () => {
  objetoOperacion = presionarOperador(restar, objetoOperacion);
  return objetoOperacion;
});
multiplicar.addEventListener("click", () => {
  objetoOperacion = presionarOperador(
    multiplicar,
    displayValor,
    objetoOperacion
  );
  return objetoOperacion;
});
dividir.addEventListener("click", () => {
  objetoOperacion = presionarOperador(dividir, objetoOperacion);
  return objetoOperacion;
});
igual.addEventListener("click", () => {
  display.textContent = operar(display.textContent, objetoOperacion);
  objetoOperacion.valorAnterior = undefined;
  return;
});
clear.addEventListener("click", () => {
  return limpiarCalculadora();
});

// Funciones display number

function displayTheValue(valueToDisplay) {
  if (display.textContent.length > 12) return;
  else if (objetoOperacion.valorGuardado === false) {
    return (display.textContent += valueToDisplay);
  } else {
    objetoOperacion.valorGuardado = false;
    return (display.textContent = valueToDisplay);
  }
}
punto.addEventListener("click", () => {
  return agregarPunto();
  function agregarPunto() {
    if (
      display.textContent === null ||
      objetoOperacion.valorGuardado === true
    ) {
      return (display.textContent = "0.");
    } else {
      let arrayString = [...display.textContent];
      for (let i = 0; i < arrayString.length; i++) {
        if (arrayString[i] === ".") {
          return;
        }
      }
      return (display.textContent += ".");
    }
  }
});
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
      Number(objetoOperacion.valorAnterior),
      Number(valorPantalla)
    );
    return resultado;
  } else if (objetoOperacion.operador === "-") {
    resultado = substract(
      Number(objetoOperacion.valorAnterior),
      Number(valorPantalla)
    );
    return resultado;
  } else if (objetoOperacion.operador === "x") {
    resultado = multiply(
      Number(objetoOperacion.valorAnterior),
      Number(valorPantalla)
    );
    return resultado;
  } else if (objetoOperacion.operador === "/") {
    if (valorPantalla === "0") {
      alert("ERROR");
      limpiarCalculadora();
      return;
    }
    resultado = divide(
      Number(objetoOperacion.valorAnterior),
      Number(valorPantalla)
    );
    return Math.round(resultado * 100) / 100;
  }
}
function limpiarCalculadora() {
  objetoOperacion = {
    operador: undefined,
    valorAnterior: undefined,
    valorGuardado: false,
  };
  display.textContent = null;
  return;
}
