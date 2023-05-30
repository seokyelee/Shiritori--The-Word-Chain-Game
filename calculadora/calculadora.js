//Crear variables
let numOne = "";
let operator = "";
let numTwo = "";
// Guardar variables, son tag($)
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

//Las partes que repiten cada vez que clicka los numero = utiliza un PRAMETRO 'number' y crea una FUNCTION

//const onClickNumber = (number) => (event) => {
//  //omitido { return} por eso queda dentro de la función de flecha hay otra function
//  if (operator) {
//    // no esta vacio
//    if (!numTwo) {
//      $result.value = "";
//    }
//    numTwo += number;
//  } else {
//    //esta vacio
//
//    numOne += number;
//  }
//  $result.value += number;
//}; //Una Funcion que hace Return de una Funcion = se llama"Funciones de orden superior" (High order function)
//;Funciones que llaman a otras funciones o que devuelven funciones (closures), se conocen como funciones de orden superior.

// si quiere usar sin Funciones de orden superior

const onClickNumber = (event) => {
  if (!operator) {
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  //abajo, ajecuta solo cuando existe operator
  if (!numTwo) {
    $result.value = "";
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;
};
//textContent (string)indica los numeros de teclas

document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

const onClickOperator = (op) => () => {
  if (numOne) {
    operator = op;
    $operator.value = op;
  } else {
    alert("Ingrse numeros primero");
  }
};

document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document
  .querySelector("#minus")
  .addEventListener("click", onClickOperator("-"));
document
  .querySelector("#divide")
  .addEventListener("click", onClickOperator("/"));
document
  .querySelector("#multiply")
  .addEventListener("click", onClickOperator("*"));

document.querySelector("#calculate").addEventListener("click", () => {
  if (numTwo) {
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        //ponemos parseInt para que cambie el type a numero
        break;
      case "-":
        $result.value = numOne - numTwo;
        //los demás no ponemos parseInt porque los casos de subtraction, multiplaition, division directamente entiende type al numero
        break;
      case "*":
        $result.value = numOne * numTwo;
        break;
      case "/":
        $result.value = numOne / numTwo;
        break;
      default:
        break;
    }
  } else {
    alert("Ingrse numeros primero");
  }
});

document.querySelector("#clear").addEventListener("click", () => {
  numOne = "";
  operator = "";
  numTwo = "";
  $operator.value = "";
  $result.value = "";
});
