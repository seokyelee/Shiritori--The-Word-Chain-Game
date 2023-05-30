// Ejemplos de function cómo crear y entender...

//document.querySelector("input").addEventListener("input", function (event) { console.log("Ingresar palabra", event.target.value);});

//const onClick = function () {
// console.log("Click botón");
//};
// document.querySelector("button").addEventListener("click", onClick);

const number = Number(prompt("¿Cuantas personas participan al Juego?"));
const $button = document.querySelector("button");
const $input = document.querySelector("input");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");
let word; //La primera palabra
let newWord; //La palabra que ha igresado nuevamente

const onClickButton = () => {
  if (!word) {
    //¿No hay palabra que seguir?
    //sí está vacía.
    word = newWord;
    $word.textContent = word; // Entonces lo que hayas ingresado, va a ser la primera palabra
    $input.value = "";
    $input.focus();

    const order = Number($order.textContent); //El actual orden

    if (order + 1 > number) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
  } else {
    //Hay palabra para seguir el juego.

    if (word[word.length - 1] === newWord[0]) {
      //¿Es correcto?
      word = newWord;
      $word.textContent = word; // Entonces lo que hayas ingresado, va a ser la primera palabra
      $input.value = "";
      $input.focus();

      const order = Number($order.textContent); //El actual orden

      if (order + 1 > number) {
        $order.textContent = 1;
      } else {
        $order.textContent = order + 1;
      }
    } else {
      // O ¿No es correcto?
      alert("¡La palabra no es correcta!");
      $input.value = "";
      $input.focus();
    }
  }
};

const onInput = (event) => {
  newWord = event.target.value;
};

$button.addEventListener("click", onClickButton);
$input.addEventListener("input", onInput);
