let number = [];
let numbers;
let input;
let inputNumber;
let soma = 0;
let res = document.querySelector(".res");
document.querySelector(".addNumber").addEventListener("click", add);

function add() {
  input = document.querySelector("input");
  inputNumber = parseInt(input.value);

  if (inputNumber >= 1 && inputNumber <= 100) {
    number.push(inputNumber);
    document.querySelector(
      ".boxValue"
    ).innerHTML += `Valor adicionado: ${inputNumber} </br>`;
    console.log(inputNumber);
    console.log(number);
  } else {
    alert("INSIRA UM NUMERO VALIDO");
  }
}

document.querySelector(".end").addEventListener("click", resposta);

function resposta() {
 
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

};

//fazer verificação 
