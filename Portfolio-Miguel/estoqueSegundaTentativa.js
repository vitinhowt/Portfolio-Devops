let itens = [];
function adicionar(){
    var produto = document.getElementById('produto').value;
    var descricao = document.getElementById('descricao').value;
    var categoria = document.getElementById('categoria').value;
    var tamanho = document.getElementById('tamanho').value;
    var cor = document.getElementById('cor').value;
    var preco = document.getElementById('preco').value;

    if (produto == "") 
        console.log("Nome não pode estar em branco")
    else if (descricao == "") 
        console.log("Descrição não pode estar em branco")
    else if (categoria == "Choose") 
        console.log("Você deve selecione uma categoria")
    else if (tamanho == "Escolha") 
        console.log("Você deve selecione um tamanho")
    else if (cor == "coritem") 
        console.log("Você deve selecione uma cor")
    else if (preco == "") 
        console.log("Preço não pode estar em branco")
    else
    itens.push({'produto':produto,'descricao':descricao,'categoria':categoria,'tamanho':tamanho,'cor':cor,'preco':preco})
    console.log(itens.length , itens)
    console.log("Produto cadastrado")
    let table = document.getElementById("estoquetabela");
    let template = `
        <tr>
            <td>${produto}</td>
            <td>${descricao}</td>
            <td>${categoria}</td>
            <td>${tamanho}</td>
            <td>${cor}</td>
            <td>${preco}</td>
        </tr> `;
    table.innerHTML += template;
}



function deletarLinha(){
    let num = prompt("Qual linha você deseja deletar?");
    if(num == null){
        return;
    }

    num = parseInt(num);

    if(num > 0){
        document.getElementById('estoquetabela').deleteRow(num);
    }

    else{
        alert("Essa opção não é válida");
    }
}



function excluir() {
    console.log("Campo limpado");
}