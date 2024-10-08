let Carros = []
function adicionar(){
    let placa= document.getElementById('placa').value
    let modelo = document.getElementById('modelo').value
    let cor = document.getElementById('cor').value
    let horariodent = document.getElementById('horariodent').value
    let entradaData = document.getElementById('entradaData').value

    if (placa == "") 
        console.log("Placa não pode estar em branco")
    else if (modelo == "") 
        console.log("Modelo não pode estar em branco")
    else if (cor == "") 
        console.log("Cor não pode estar em branco")
    else if (horariodent == "") 
        console.log("Você deve selecione um horário")
    else if(entradaData == "")
    console.log("Você deve selecione uma data")
    else
    Carros.push({'placa':placa,'modelo':modelo,'cor':cor,'horariodent':horariodent, 'entradaData':entradaData})
    console.log(Carros.length , Carros)
    console.log("Produto cadastrado")
}

function buscarCarroPorPlaca(placa) {
    for (let i = 0; i < Carros.length; i++) {
      if (Carros[i].placa === placa) {
        return Carros[i]
      }
    }
    return null
  }

function calcularTempo(){
    let placaBusca = document.getElementById("placaBusca").value
        let resultado = buscarCarroPorPlaca(placaBusca)
        let result = []
        
        result.push(resultado)
        
    const entradaData = resultado.entradaData
    const entradaHora = resultado.horariodent
    const saidaData = document.getElementById('saidaData').value;
    const saidaHora = document.getElementById('saidaHora').value;
    const entrada = new Date(entradaData + 'T' + entradaHora);
    const saida = new Date(saidaData + 'T' + saidaHora);
    const diferenca = saida.getTime() - entrada.getTime();
    var tempoTotal = diferenca / 1000 / 60 / 60;

 
        
        if (resultado) {
            let table = document.getElementById("tblresult")
            let template = `
            <tr class = "transporte">
                <td>${resultado.placa}</td>
                <td>${resultado.modelo}</td>
                <td>${resultado.cor}</td>
                <td>${resultado.horariodent}</td>
                <td>${tempoTotal}</td>
                <td><button id="btn1" onclick = "saida()" type="button"> x </button></td>
            </tr> `;
            table.innerHTML += template
        } else {
            console.log("Nenhum carrro encontrado")
        
    }
}
function saida() {
    
    const tabela = document.querySelector(".transporte").remove()
    var tarifa = parseFloat(prompt("Qual a tarifa?"))
    var tempo = parseFloat(prompt("Qual o tempo de permanência?"))
    total = tarifa*tempo
    alert(`O total a ser pago é ${total} reais`)
      
}
    btn = document.querySelector("#btn1");
    btn.addEventListener('click', saida());


 

  


