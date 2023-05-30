const $input = document.querySelector("#input");
const $form = document.querySelector("#form");
const $logs = document.querySelector("#logs");

const numbers = [];
for (let n = 1; n <= 9; n += 1) {
  numbers.push(n);
}
//practicar a cambiar con while
const answer = [];

for (let n = 0; n <= 3; n += 1) {
  //repite 4vecez (let n = 0; n < 4; n += 1)
  const index = Math.floor(Math.random() * numbers.length); // defender excionales(undifine) numbers.length
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(answer);
// '3046',   '4316'

//$form.addEventListener("submit", (event) => { event.preventeDefault();
//prevenir operacion de refrescar la pantalla para que no se borre los datos de random ej)tag <form>,<a> });

const tries = [];
function checkInput(input) {
  if (input.length !== 4) {
    return alert("Ingrese número de 4 dígito");
  }
  if (new Set(input).size !== 4) {
    return alert("Ingrese numeros sin repetición");
  }
  if (tries.includes(input)) {
    return alert("Está repetido, ingrese de nuevo.");
  }
  return true;
} //funcion de examinar los numeros.

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = $input.value;
  $input.value = "";
  if (!checkInput(value)) {
    return;
  }
  if (answer.join("") === value) {
    $logs.textContent.Content = "¡HomeRun!";
    return;
  }
  if (tries.length >= 9) {
    const message = docuement.createTextNode(
      `¡Fallaste! La respuesta es ${answer.join("")}`
    );

    $logs.appendChild(message);
    returan;
  }

  let strike = 0;
  let ball = 0;

  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) {
      if (index === i) {
        strike += 1;
      } else {
        ball += 1;
      }
    }
  }
  $logs.append(
    `${value}: ${strike} Strike ${ball} Ball`,
    document.createElement("br")
  );
});
