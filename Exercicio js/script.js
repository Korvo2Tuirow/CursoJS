let number = [];
let numbers;
let input;
let inputNumber;
let soma = 0;
let res = document.querySelector(".res");
document.querySelector(".addNumber").addEventListener("click", add);
let info = document.querySelector(".boxValue");
function add() {
  input = document.querySelector("input");
  inputNumber = parseInt(input.value);

  if (inputNumber >= 1 && inputNumber <= 100) {
    number.push(inputNumber);
    info.innerHTML += `Valor adicionado: ${inputNumber} </br>`;
    document.querySelector(".end").addEventListener("click", resposta);
    input.value = "";
  } else {
    alert("INSIRA UM NUMERO VALIDO");
  }

  if (res.innerHTML != "") {
    resposta();
  }
}

document.querySelector(".end").addEventListener("click", resposta);

function resposta() {
  if (number.length > 0) {
    numbers = number.length;

    for (let i = 0; i < number.length; i++) {
      soma += number[i];
    }

    let maxValue = Math.max.apply(null, number);
    let minValue = Math.min.apply(null, number);

    let mediaValue = (soma / number.length).toFixed(2);

    res.innerHTML = `<p>Ao todo, temos ${numbers} números cadastrado</p>
    <p>O maior valor informado foi ${maxValue}</p>
    <p>O menor valor informado foi ${minValue}</p>
    <p>Somando todos os valores, temos ${soma}</p>
    <p>A média dos valores é ${mediaValue}</p>  `;

    document.querySelector(".end").removeEventListener("click", resposta);
  }
}

document.querySelector(".clear").addEventListener("click", () => {
  number = [];
  info.innerHTML = "";
  res.innerHTML = "";
  input.value = "";
});
