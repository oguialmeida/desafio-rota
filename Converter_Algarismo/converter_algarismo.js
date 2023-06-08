/* A sua tarefa será fazer um conversor de números romanos para arábicos e vice-versa.
Para a tarefa, considerar apenas números inteiros positivos entre 1 e 3999. */

function converterRomano(number) {
  let num = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let romanSymbols = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];
  let convercao = "";

  for (let i = 12; number > 0; i--) {
    let divisible = Math.floor(number / num[i]);
    number = number % num[i];
    convercao += romanSymbols[i].repeat(divisible);
  }
  return convercao;
}

function converterDecimal(roman) {
  let num = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let romanSymbols = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];
  let decimal = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    let currentSymbol = roman[i];
    let currentValue = num[romanSymbols.indexOf(currentSymbol)];

    if (i > 0) {
      let previousSymbol = roman[i - 1];
      let previousValue = num[romanSymbols.indexOf(previousSymbol)];

      if (currentValue > previousValue) {
        decimal += currentValue - previousValue;
        i--;
      } else {
        decimal += currentValue;
      }
    } else {
      decimal += currentValue;
    }
  }

  return decimal;
}

let btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let numeroObtido = document.querySelector("#number");
  let valorNumero = numeroObtido.value;

  let tipoConversao = document.getElementById("tipoConversao");
  let valorConvercao = tipoConversao.value;

  try {
    if (valorConvercao === "romano") {
      let convercao = converterRomano(valorNumero);
      let resultado = document.getElementById("resultado");
      resultado.innerText = `Resultado: ${convercao}`;
    } else {
      let decimal = converterDecimal(valorNumero);
      let resultado = document.getElementById("resultado");
      resultado.innerText = `Resultado: ${decimal}`;
    } 
  } catch (error) {
    console.error(error);
  }
});
