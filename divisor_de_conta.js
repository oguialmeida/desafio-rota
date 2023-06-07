/* 
A sua tarefa será criar uma calculadora capaz de dividir a conta de um estabelecimento
para cada cliente considerando somente o consumido por cada um. Considerar que a
calculadora somente faz a divisão de uma conta por vez.
- Deve ser possível inserir múltiplos produtos e clientes;
- Um cliente pode ter consumido vários, um ou nenhum produto;
- Um produto pode ter sido consumido por vários ou um cliente;
- Deve ser verificado a inclusão dos 10% do serviço para cada pessoa individualmente,
sendo a taxa aplicada ao valor que cada um gastou.
 */

let contador = 0;

function adicionarItem() {
    let novoItem = document.createElement("li")
    contador++
    novoItem.innerText = "Item " + contador + " "
    let botaoRemover = document.createElement("button")
    botaoRemover.innerText = "Remover"
    botaoRemover.onclick = function() { removerItem(botaoRemover.parentNode) }
    novoItem.appendChild(botaoRemover)
    document.getElementById("lista").appendChild(novoItem)
}

function removerItem() {
    item.parentNode.removeChild(item)
}
