let number = [];
let numbers;
let input;
let inputNumber;
let soma = 0;
document.querySelector(".addNumber").addEventListener("click", add);

function add() {
  input = document.querySelector("input");
  let ver = typeof inputNumber;
 
  inputNumber = parseInt(input.value);

  if (inputNumber > 100 || inputNumber <= 0 ||ver != 'number') {
    alert("INSIRA UM NUMERO VALIDO");
  } else {
    number.push(inputNumber);

    document.querySelector(
      ".boxValue"
    ).innerHTML += `Valor adicionado: ${inputNumber} </br>`;

    console.log(inputNumber);
    console.log(number);
  }
}

document.querySelector(".end").addEventListener("click", () => {
  numbers = number.length;

  for (let i = 0; i < number.length; i++) {
    soma += number[i];
  }

  let maxValue = Math.max.apply(null, number);
  let minValue = Math.min.apply(null, number);

  let mediaValue = (soma / number.length).toFixed(2);

  document.querySelector(
    ".res"
  ).innerHTML = `<p>Ao todo, temos ${numbers} números cadastrado</p>
    <p>O maior valor informado foi ${maxValue}</p>
    <p>O menor valor informado foi ${minValue}</p>
    <p>Somando todos os valores, temos ${soma}</p>
    <p>A média dos valores é ${mediaValue}</p>  `;
});
