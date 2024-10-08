let matriz = [];
let cellId;
let interagindoComAt = true;
let teleportando = false;
let teleportandoBack = false;
let vidas = 3
let posicaoAtual;
let boneco = "$";
let vilaoPosX = 21;
let vilaoPosY = 17;
let direcaoVilao = -1; // Indica a direção do movimento do vilão

//funcao para criar um elemento
function criaTag(elemento) {
    return document.createElement(elemento);
}

let tabela = document.getElementById("tabela");
let tbody = criaTag("tbody");
tabela.appendChild(tbody);

// Loop para criar as linhas
  for(let linha = 0; linha < 62; linha++) {
    let tr = criaTag("tr");
    tbody.appendChild(tr);
    matriz[linha] = [];  
    // Loop para criar as células em cada linha.
    for(let coluna = 0; coluna < 62; coluna++){
        let td = criaTag("td");
        cellId = "cell-" + linha + "-" + coluna; // cria o ID dinâmico para a célula
        td.setAttribute("id", cellId); // atribui o ID à célula
        if (linha === 0 || coluna === 0 || linha === 61 || coluna === 61 || (linha > 27 && linha < 33 && coluna === 28) || (linha > 27 && linha < 33 && coluna === 32) || (linha === 28 && coluna > 27 && coluna < 32) || (linha === 32 && coluna > 27 && coluna < 32) || (linha > 0 && linha < 6 && coluna === 52) || (linha > 0 && linha < 6 && coluna === 54) || (linha === 5 && coluna === 53) || (linha > 57 && linha < 61 && coluna === 58) || (linha === 58 && coluna > 58 && coluna < 61) || (linha === 49 && coluna < 7) || (coluna === 6 && linha > 49 && linha < 55) || (linha === 51 && coluna > 1 && coluna < 5) || (coluna === 4 && linha > 51 && linha < 55) || (coluna === 2 && linha > 51 && linha < 58) || (linha === 57 && coluna < 5) || (coluna === 4 && linha > 57) || (coluna === 1 && linha === 56)) {   
          matriz[linha][coluna] = "*";
          td.textContent = matriz[linha][coluna];
            if (linha === 1 && coluna === 0) {
              matriz[linha][coluna] = "D";
              td.textContent = matriz[linha][coluna];
          }
          } 
        else if( linha === 30 && coluna === 30) {
            matriz[linha][coluna] = "&";
            td.textContent = matriz[linha][coluna];
        }
        else if(linha === 60 && coluna === 25) {
          matriz[linha][coluna] = "@";
          td.textContent = matriz[linha][coluna];
        }
        else if((linha === 2 && coluna < 25) || (linha === 1 && coluna  === 11) || (coluna === 24 && linha < 3) || (linha === 8 && coluna < 54) || (linha === 12 && coluna < 28) || (coluna === 4 && linha > 9 && linha < 12) || (coluna === 6 && linha > 8 && linha < 11) || (coluna === 8 && linha > 9 && linha < 12) || (coluna === 10 && linha > 8 && linha < 11) || (coluna === 12 && linha > 9 && linha < 12) || (coluna === 14 && linha > 8 && linha < 11) || (coluna === 16 && linha > 9 && linha < 12) || (coluna === 18 && linha > 8 && linha < 11) || (coluna === 20 && linha > 9 && linha < 16) || (coluna === 22 && linha > 8 && linha < 11) || (coluna === 24 && linha > 9 && linha < 12) || (coluna === 26 && linha > 8 && linha < 11) || (coluna === 28 && linha > 9 && linha < 12) || (coluna > 28 && coluna < 51 && linha === 10) || (linha === 18 && coluna < 24) || (linha === 20 && coluna > 1 && coluna < 22) || (coluna === 59 && linha < 14) || (coluna === 55 && linha < 3) || (coluna === 55 && linha > 5 && linha < 11) || (coluna === 55 && linha > 11 && linha < 17) || (coluna === 55 && linha > 17 && linha < 21) || (linha === 16 && coluna > 21 && coluna < 30) || (linha === 16 && coluna > 30) || (linha === 13 && coluna > 29 && coluna < 54) || (coluna === 53 && linha > 10 && linha < 13) || (coluna === 57 && linha > 1 && linha < 7) || (coluna === 57 && linha > 9 && linha < 13) || (coluna === 56 && linha === 2) || (coluna === 56 && linha === 10) || (coluna === 56 && linha === 12) || (linha === 8 && coluna > 56 && coluna < 59) || (linha === 14 && coluna > 56 && coluna < 60) || (linha === 20 && coluna > 55) || (coluna > 51 && coluna < 55 && linha === 18) || (coluna === 51 && linha === 19) || (linha === 18 && coluna > 45 && coluna < 51) || (coluna === 45 && linha === 19) || (coluna === 36 && linha === 19) || (linha === 18 && coluna > 36 && coluna < 45) || (linha === 18 && coluna > 30 && coluna < 36) || (linha === 18 && coluna > 20 && coluna < 30) || (coluna === 24 && linha > 18 && linha < 28) || (coluna === 2 && linha > 20 && linha < 28) || (linha === 29 && coluna < 12) || (linha === 22 && coluna > 3 && coluna < 24 ) || (linha === 24 && coluna > 2 && coluna < 23 ) || (linha === 27 && coluna > 2 && coluna < 24) || (linha === 26 && coluna === 5) || (linha === 25 && coluna === 7) || (linha === 26 && coluna === 9) || (linha === 25 && coluna === 11) || (linha === 26 && coluna === 13) || (linha === 25 && coluna === 15) || (linha === 26 && coluna === 17) || (linha === 25 && coluna === 19)
         || (linha === 26 && coluna === 21) || (linha === 9 && coluna === 53) || (linha === 16 && coluna === 20) ||  (linha === 6 && coluna === 56) ||(linha === 35 && coluna < 4) ||(linha === 60 && coluna === 22)||(linha === 39 && coluna < 4) || (coluna === 3 && linha > 35 && linha < 39) || (linha === 45 && coluna < 10) || (linha > 40 && linha < 52 && coluna === 9) || (coluna === 7 && linha > 46 && linha < 55) || (coluna === 11 && linha > 42 && linha < 55) || (coluna === 11 && linha > 29 && linha < 42) || (coluna === 13 && linha > 27 && linha < 40) || (linha === 41 && coluna > 9 && coluna < 21) || (linha === 39 && coluna > 13 && coluna < 23) || (coluna === 22 && linha > 39 && linha < 44) || (linha === 43 && coluna > 11 && coluna < 22) || (coluna === 16 && linha > 44 && linha < 58) || (coluna === 18 && linha > 46 && linha < 56) || (linha === 45 && coluna > 16) || (linha === 47 && coluna > 18 && coluna < 60) || (coluna === 12 && linha > 53) || (linha === 60 && coluna > 4 && coluna < 12) || (linha === 58 && coluna > 4 && coluna < 11) || (linha === 56 && coluna > 3 && coluna < 11) 
         || (linha === 57 && coluna === 10) || (linha === 16 && coluna === 30) || (linha === 14 && coluna === 30) ||(linha === 15 && coluna === 30) || (linha === 10 && coluna === 53) || (linha === 17 && coluna === 20) || (linha === 19 && coluna === 30) || (linha === 53 && coluna > 7 && coluna < 11) || (linha === 54 && coluna > 7 && coluna < 11) || (linha === 55 && coluna === 4) || (linha === 48 && coluna < 6) || (linha === 47 && coluna > 4 && coluna < 7) || (linha === 46 && coluna === 3) || (linha === 57 && coluna > 16 && coluna < 51) || (coluna === 52 && linha > 51) || (coluna === 59 && linha > 47 && linha < 53) || (linha === 55 && coluna > 18 && coluna < 52) || (linha === 59 && coluna > 21 && coluna < 51) || (coluna === 50 && linha === 58) || (linha === 52 && coluna > 52 && coluna < 59) || (linha === 54 && coluna > 53) || (coluna === 57 && linha === 55) || (linha === 56 && coluna > 52  && coluna < 56) || (linha === 57 && coluna  > 54 && coluna < 59) || (linha === 41 && coluna > 29) || (linha === 38 && coluna > 27 && coluna < 50) || (coluna === 28 && linha > 38 && linha < 44) || (linha === 43 && coluna > 28 && coluna < 31) || (coluna === 30 && linha === 44) || (coluna === 49 && linha > 38 && linha < 41) || (coluna === 59 && linha > 29 && linha < 34) || (coluna === 54 && linha > 29 && linha < 34) || (linha === 29 && coluna > 53 && coluna < 60) || (linha === 33 && coluna > 54 && coluna < 59) || (linha === 25 && coluna > 43 && coluna < 51) || (linha === 29 && coluna > 43 && coluna < 51) || (coluna === 44 && linha > 25 && linha < 29) || (coluna === 50 && linha > 25 && linha < 29)){
            matriz[linha][coluna] = "#";
            td.textContent = matriz[linha][coluna];
        }
        
        else if(linha === 31 && coluna === 55){
          matriz[linha][coluna] = "O";
          td.textContent = matriz[linha][coluna];
        }
        else if((linha === 10 && coluna === 1) || (linha===26 && coluna === 3) || (linha === 37 && coluna === 1) || (linha === 59 && coluna === 2) || (linha  === 59 && coluna === 5) || (linha === 1 && coluna === 23) || (linha === 60 && coluna === 23) || (linha === 29 && coluna > 28 && coluna < 32) || (linha === 31 && coluna > 28 && coluna < 32) || (linha  === 30 && coluna === 29) || (linha  === 30 && coluna === 31) || (linha  === 27 && coluna === 47) || (linha  === 39 && coluna === 48) || (linha  === 1 && coluna === 53) || (linha  === 1 && coluna === 56) || (linha  === 1 && coluna === 60) || (linha  === 57 && coluna === 60) || (linha  === 60 && coluna === 60) || (linha  === 18 && coluna === 60) || (linha  === 32 && coluna === 56) || (linha  === 44 && coluna === 60) ){
          matriz[linha][coluna] = "<";
          td.textContent = matriz[linha][coluna];
        }
        else {
          matriz[linha][coluna] =  " ";
          td.textContent = matriz[linha][coluna];
          }
        tr.appendChild(td);
    }
}

// Posição inicial do personagem
let posicaoX = 30;
let posicaoY = 30;

// Movimentação do personagem
document.addEventListener("keydown", function(event){
  let tecla = event.keyCode;
  switch(tecla) {
    case 65:
      esquerda();
      break;
    case 87:
      cima();
      break;
    case 68:
      direita();
      break;
    case 83:
      baixo();
      break;
    case 73: //I
      teleportar();
      if (posicaoY == 60 && posicaoX == 25) {
        matriz[60][25] = "&";
        matriz[1][0] = "=";
        interagindoComAt = false;
        atualizaTabela();
      }
      if (posicaoY == 31 && posicaoX == 55) {
      matriz[31][55] = "&";
      matriz[1][11] = " ";
      mostrandoO = false;
      atualizaTabela();
    }
      break;
  }
});

function teleportar() {
  if(posicaoY == 20 && posicaoX == 30){
    matriz[37][1] = "&";
    matriz[20][30] = "<";
    posicaoY = 37;
    posicaoX = 1;
    matriz[posicaoY][posicaoX] = "&";
    teleportando = true;
    atualizaTabela();
  }
  else if(posicaoY == 31 && posicaoX == 29){
    matriz[32][56] = "&";
    matriz[31][29] = "<"
    posicaoY = 32;
    posicaoX = 56;
    matriz[posicaoY][posicaoX] = "&";
    teleportando = true;
    atualizaTabela();
    console.log('pipoca')
  }
  else if (posicaoY == 31 && posicaoX == 31){
    matriz[18][60] = "&";
    matriz[31][31] = "<"
    posicaoY = 18;
    posicaoX = 60;
    matriz[posicaoY][posicaoX] = "&";
    teleportandoBack = true;
    atualizaTabela();
    console.log("baiacu")
  }
  else if (posicaoY == 30 && posicaoX == 31){
    matriz[27][47] = "&";
    matriz[30][31] = "<"
    posicaoY = 27;
    posicaoX = 47;
    matriz[posicaoY][posicaoX] = "&";
    teleportandoBack = true;
    atualizaTabela();
    console.log("baiacu")
  }
  else if (posicaoY == 29 && posicaoX == 31){
    matriz[1][60] = "&";
    matriz[29][31] = "<"
    posicaoY = 1;
    posicaoX = 60;
    matriz[posicaoY][posicaoX] = "&";
    teleportandoBack = true;
    atualizaTabela();
    console.log("baiacu")
  }
  else if (posicaoY == 1 && posicaoX == 56){
    matriz[59][2] = "&";
    matriz[1][56] = "<"
    posicaoY = 59;
    posicaoX = 2;
    matriz[posicaoY][posicaoX] = "&";
    teleportandoBack = true;
    atualizaTabela();
  }
  else if (posicaoY == 31 && posicaoX == 30){
    matriz[46][1] = "&";
    matriz[31][30] = "<"
    posicaoY = 46;
    posicaoX = 1;
    matriz[posicaoY][posicaoX] = "&";
    teleportandoBack = true;
    atualizaTabela();
  }
  else if (posicaoY == 29 && posicaoX == 29){
    matriz[59][5] = "&";
    matriz[29][29] = "<"
    posicaoY = 59;
    posicaoX = 5;
    matriz[posicaoY][posicaoX] = "&";
    teleportandoBack = true;
    atualizaTabela();
  }
  else if (posicaoY == 29 && posicaoX == 30){
    matriz[44][60] = "&";
    matriz[29][30] = "<"
    posicaoY = 44;
    posicaoX = 60;
    matriz[posicaoY][posicaoX] = "&";
    teleportandoBack = true;
    atualizaTabela();
  }
  else if (posicaoY == 39 && posicaoX == 48){
    matriz[37][1] = "&";
    matriz[39][48] = "<"
    posicaoY = 37;
    posicaoX = 1;
    matriz[posicaoY][posicaoX] = "&";
    teleportandoBack = true;
    atualizaTabela();
  }
  else if (posicaoY == 26 && posicaoX == 3){
    matriz[60][60] = "&";
    matriz[26][3] = "<"
    posicaoY = 60;
    posicaoX = 60;
    matriz[posicaoY][posicaoX] = "&";
    teleportandoBack = true;
    atualizaTabela();
  }
  else if (posicaoY == 55 && posicaoX == 1){
    matriz[1][53] = "&";
    matriz[55][1] = "<"
    posicaoY = 1;
    posicaoX = 53;
    matriz[posicaoY][posicaoX] = "&";
    teleportandoBack = true;
    atualizaTabela();
  }
  else if (posicaoY == 10 && posicaoX == 1){
    matriz[1][23] = "&";
    matriz[10][1] = "<"
    posicaoY = 1;
    posicaoX = 23;
    matriz[posicaoY][posicaoX] = "&";
    teleportandoBack = true;
    atualizaTabela();
  }
  else if (posicaoY == 30 && posicaoX == 29){
    matriz[57][60] = "&";
    matriz[30][29] = "<"
    posicaoY = 57;
    posicaoX = 60;
    matriz[posicaoY][posicaoX] = "&";
    teleportandoBack = true;
    atualizaTabela();
  }
  else if (posicaoY == 60 && posicaoX == 23){
    matriz[30][29] = "&";
    matriz[60][23] = "<"
    posicaoY = 30;
    posicaoX = 29;
    matriz[posicaoY][posicaoX] = "&";
    teleportandoBack = true;
    atualizaTabela();
  }
  else{
    teleportarBack();
  }
}

function teleportarBack() {
    if (posicaoY == 37 && posicaoX == 1){
      matriz[20][30] = "&";
      matriz[37][1] = "<";
      posicaoY = 20;
      posicaoX = 30;
      matriz[posicaoY][posicaoX] = "&";
      teleportandoBack = true;
      atualizaTabela();
    }
    else if (posicaoY == 32 && posicaoX == 56){
      matriz[31][29] = "&";
      matriz[32][56] = "<";
      posicaoY = 31;
      posicaoX = 29;
      matriz[posicaoY][posicaoX] = "&";
      teleportandoBack = true;
      atualizaTabela();
    }
    else if (posicaoY == 1 && posicaoX == 53){
      matriz[55][1] = "&";
      matriz[1][53] = "<";
      posicaoY = 55;
      posicaoX = 1;
      matriz[posicaoY][posicaoX] = "&";
      teleportandoBack = true;
      atualizaTabela();
    }
    else if (posicaoY == 18 && posicaoX == 60){
      matriz[31][31] = "&";
      matriz[18][60] = "<";
      posicaoY = 31;
      posicaoX = 31;
      matriz[posicaoY][posicaoX] = "&";
      teleportandoBack = true;
      atualizaTabela();
    }
    else if (posicaoY == 1 && posicaoX == 60){
      matriz[29][31] = "&";
      matriz[1][60] = "<";
      posicaoY = 29;
      posicaoX = 31;
      matriz[posicaoY][posicaoX] = "&";
      teleportandoBack = true;
      atualizaTabela();
    }
    else if (posicaoY == 59 && posicaoX == 2){
      matriz[1][56] = "&";
      matriz[59][2] = "<";
      posicaoY = 1;
      posicaoX = 56;
      matriz[posicaoY][posicaoX] = "&";
      teleportandoBack = true;
      atualizaTabela();
    }
    else if (posicaoY == 46 && posicaoX == 1){
      matriz[31][30] = "&";
      matriz[46][1] = "<";
      posicaoY = 31;
      posicaoX = 30;
      matriz[posicaoY][posicaoX] = "&";
      teleportandoBack = true;
      atualizaTabela();
    }
    else if (posicaoY == 59 && posicaoX == 5){
      matriz[29][29] = "&";
      matriz[59][5] = "<";
      posicaoY = 29;
      posicaoX = 29;
      matriz[posicaoY][posicaoX] = "&";
      teleportandoBack = true;
      atualizaTabela();
    }
    else if (posicaoY == 44 && posicaoX == 60){
      matriz[29][30] = "&";
      matriz[44][60] = "<";
      posicaoY = 29;
      posicaoX = 30;
      matriz[posicaoY][posicaoX] = "&";
      teleportandoBack = true;
      atualizaTabela();
    }
    else if (posicaoY == 60 && posicaoX == 60){
      matriz[26][3] = "&";
      matriz[60][60] = "<";
      posicaoY = 26;
      posicaoX = 3;
      matriz[posicaoY][posicaoX] = "&";
      teleportandoBack = true;
      atualizaTabela();
    }
    else if (posicaoY == 1 && posicaoX == 23){
      matriz[10][1] = "&";
      matriz[1][23] = "<";
      posicaoY = 10;
      posicaoX = 1;
      matriz[posicaoY][posicaoX] = "&";
      teleportandoBack = true;
      atualizaTabela();
    }
    else if (posicaoY == 57 && posicaoX == 60){
      matriz[30][29] = "&";
      matriz[57][60] = "<";
      posicaoY = 30;
      posicaoX = 29;
      matriz[posicaoY][posicaoX] = "&";
      teleportandoBack = true;
      atualizaTabela();
    }
}
 
function esquerda() {
  if (posicaoX > 0 && !parede(posicaoX - 1, posicaoY)) {
    if (espinho(posicaoX - 1, posicaoY)) {
      matriz[posicaoY][posicaoX] = " ";
      posicaoX = 30;
      posicaoY = 30;
      matriz[posicaoY][posicaoX] = "&";
    } else {
      matriz[posicaoY][posicaoX] = " ";
      posicaoX--;
      matriz[posicaoY][posicaoX] = "&";
    }
    atualizaTabela();
    concluirFase();
  }
}

function cima() {
  if (posicaoY > 0 && !parede(posicaoX, posicaoY - 1)) {
    window.scrollBy(0, -5*4);
    if (espinho(posicaoX, posicaoY - 1)) {
      matriz[posicaoY][posicaoX] = " ";
      posicaoX = 30;
      posicaoY = 30;
      matriz[posicaoY][posicaoX] = "&";
    } else {
      matriz[posicaoY][posicaoX] = " ";
      posicaoY--;
      matriz[posicaoY][posicaoX] = "&";
    }
    atualizaTabela();
    concluirFase();
  }
}

function direita() {
  if (posicaoX < 60 && !parede(posicaoX + 1, posicaoY)) {
    if (espinho(posicaoX + 1, posicaoY)) {
      matriz[posicaoY][posicaoX] = " ";
      posicaoX = 30;
      posicaoY = 30;
      matriz[posicaoY][posicaoX] = "&";
    } else {
      matriz[posicaoY][posicaoX] = " ";
      posicaoX++;
      matriz[posicaoY][posicaoX] = "&";
    }
    atualizaTabela();
    concluirFase();
  }
}

function baixo() {
  if (posicaoY < 60 && !parede(posicaoX, posicaoY + 1)) {
    window.scrollBy(0, 5*4);
    if (espinho(posicaoX, posicaoY + 1)) {
      matriz[posicaoY][posicaoX] = " ";
      posicaoX = 30;
      posicaoY = 30;
      matriz[posicaoY][posicaoX] = "&";
    } else {
      matriz[posicaoY][posicaoX] = " ";
      posicaoY++;
      matriz[posicaoY][posicaoX] = "&";
    }
    atualizaTabela();
    concluirFase();
  }
}

function parede(x, y) {
  return matriz[y][x] === "*" || matriz[y][x] === "D";
}

function espinho(x, y) {
  if (matriz[y][x] === "#" || matriz[y][x] === boneco) {
    matriz[posicaoY][posicaoX] = " ";
    matriz[1][11] = "#"
    matriz[31][55] = "O"
    posicaoX = 30;
    posicaoY = 30;
    matriz[posicaoY][posicaoX] = "&";
    vidas--;
    alert(`Você perdeu uma vida no total de 3, agora você tem ${vidas} vidas`)

    if (vidas === 0) {
      alert("Você perdeu todas as vidas!");
      voltarMenu();
    }
    return true;
  }
  return false;
}

function bonecoMau(x, y){
  if (matriz[y][x] === boneco) {
    matriz[posicaoY][posicaoX] = " ";
     matriz[1][11] = "#"
    matriz[31][55] = "O"
    posicaoX = 30;
    posicaoY = 30;
    matriz[posicaoY][posicaoX] = "&";
    vidas--;
    alert(`Você perdeu uma vida no total de 3, agora você tem ${vidas} vidas`)
    if (vidas === 0) {
      alert("Você perdeu todas as vidas!");
      voltarMenu();
    }
    return true;
  }
  return false;
}

// Atualiza a tabela na página HTML
function atualizaTabela() {
  let tabela = document.getElementById("tabela");
  let tbody = tabela.getElementsByTagName("tbody")[0];

  for(let i = 0; i < 62; i++){
    let tr = tbody.getElementsByTagName("tr")[i];
    for(let j = 0; j < 62; j++){
      let td = tr.getElementsByTagName("td")[j];
      td.textContent = matriz[i][j];
      if (matriz[i][j] === "&") {
        td.classList.add("&");
        if((i != 60 || j != 1) && interagindoComAt){
          matriz[60][25] = "@";
        }
        if((i != 1 || j!= 56)){
           matriz[1][56] = "<";
        }
        if((i != 59 || j!= 2)){
           matriz[59][2] = "<";
        }
        if((i != 59 || j!= 5)){
          matriz[59][5] = "<";
       }
        if(i != 32 || j!= 56){
          matriz[32][56] = "<";
        }
        if(i != 31 || j!= 29){
          matriz[31][29] = "<";
        }
        if(i != 29 || j!= 30){
          matriz[29][30] = "<";
        }
        if(i != 39 || j!= 48){
          matriz[39][48] = "<";
        }
        if(i != 31 || j!= 31){
          matriz[31][31] = "<";
        }
        if(i != 29 || j!= 29){
          matriz[29][29] = "<";
        }
        if(i != 44 || j!= 60){
          matriz[44][60] = "<";
        }
        if(i != 18 || j!= 60){
          matriz[18][60] = "<";
        }
        if(i != 30 || j!= 31){
          matriz[30][31] = "<";
        }
        if(i != 31 || j!= 30){
          matriz[31][30] = "<";
        }
        if(i != 1 || j!= 60){
          matriz[1][60] = "<";
        }
        if(i != 29 || j!= 31){
          matriz[29][31] = "<";
        }
        if(i != 46 || j!= 1){
          matriz[46][1] = "<";
        }
        if(i != 26 || j!= 3){
          matriz[26][3] = "<";
        }
        if(i != 60 || j!= 60){
          matriz[60][60] = "<";
        }
        if(i != 1 || j!= 53){
          matriz[1][53] = "<";
        }
        if(i != 55 || j!= 1){
          matriz[55][1] = "<";
        }
        if(i != 10 || j!= 1){
          matriz[10][1] = "<";
        }
        if(i != 1 || j!= 23){
          matriz[1][23] = "<";
        }
        if(i != 57 || j!= 60){
          matriz[57][60] = "<";
        }
        if(i != 30 || j!= 29){
          matriz[30][29] = "<";
        }
        if(i != 60 || j!= 23){
          matriz[60][23] = "<";
        }
      } else {
        td.classList.remove("&");
      }
  }
  }
}

function concluirFase() {
  if(matriz[posicaoY][posicaoX] === matriz[1][0]) {
    alert("Parabéns, você conclui o jogo!");
    var botao = document.createElement("button");
    botao.innerHTML = "Parabéns, você conseguiu, agora você voltou pra casa:) ";
    botao.addEventListener("click", function() {
    window.location.href = "TelaDeConclusão.html";
});
document.body.appendChild(botao);
  }
}

function voltarMenu() {
  window.location.href = "TelaDeGameOver.html";
}

  function moverBoneco() {
    if(vilaoPosX === 60 || vilaoPosX === 20) {
      direcaoVilao *= -1;
    }
    vilaoPosX += direcaoVilao;
    matriz[vilaoPosY][vilaoPosX] = boneco;
    matriz[vilaoPosY][vilaoPosX - direcaoVilao] = " ";
    console.log('a')
    atualizaTabela();
  }

document.addEventListener("DOMContentLoaded", function() {
  setInterval(moverBoneco, 100); // Inicia o movimento do vilão a cada 500 milissegundos (0,5 segundos)
});