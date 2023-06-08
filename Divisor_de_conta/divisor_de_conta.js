/* A sua tarefa será fazer um conversor de números romanos para arábicos e vice-versa.
Para a tarefa, considerar apenas números inteiros positivos entre 1 e 3999. */

let contador = 0;
let itensPorCliente = {};

function adicionarItem() {
  let item = document.getElementById("inputItem").value;
  let preco = parseFloat(document.getElementById("inputPreco").value);
  let cliente = document.getElementById("inputCliente").value;

  if (item.trim() === "" || preco <= 0 || cliente.trim() === "") {
    alert("Por favor, preencha corretamente o item, o preço e o cliente.");
    return;
  }

  if (!itensPorCliente.hasOwnProperty(cliente)) {
    itensPorCliente[cliente] = [];
  }

  itensPorCliente[cliente].push(preco);

  let novoItem = document.createElement("li");
  contador++;
  novoItem.classList.add("list-group-item");
  novoItem.innerHTML =
    "Pedido " +
    contador +
    ": " +
    item +
    " (Preço: R$" +
    preco.toFixed(2) +
    ", Cliente: " +
    cliente +
    ")";
  let botaoRemover = document.createElement("button");
  botaoRemover.innerText = "Remover";
  botaoRemover.classList.add("btn", "btn-danger", "btn-sm", "ml-2");
  botaoRemover.onclick = function () {
    removerItem(botaoRemover.parentNode, cliente, preco);
  };
  novoItem.appendChild(botaoRemover);
  document.getElementById("lista").appendChild(novoItem);
  document.getElementById("inputItem").value = "";
  document.getElementById("inputPreco").value = "";
  document.getElementById("inputCliente").value = "";
}

function removerItem(item, cliente, precoItem) {
  item.parentNode.removeChild(item);
  if (itensPorCliente.hasOwnProperty(cliente)) {
    const index = itensPorCliente[cliente].indexOf(precoItem);
    if (index > -1) {
      itensPorCliente[cliente].splice(index, 1);
    }
  }
}

function calcularTotal() {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  for (let cliente in itensPorCliente) {
    if (itensPorCliente.hasOwnProperty(cliente)) {
      let total = itensPorCliente[cliente].reduce((acc, curr) => acc + curr, 0);
      let totalComTaxa = total * 1.1;
      resultado.innerHTML +=
        "Cliente " +
        cliente +
        ": R$" +
        total.toFixed(2) +
        " + 10% = R$" +
        totalComTaxa.toFixed(2) +
        "<br>";
    }
  }
}
