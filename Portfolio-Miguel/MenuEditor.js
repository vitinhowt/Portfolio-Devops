document.addEventListener("DOMContentLoaded", function(){
    const projetoForm = document.getElementById("adicionar");
    const tituloInput = document.getElementById("titulo-input");
    const descricaoInput = document.getElementById("descricao-input");
    const imagemInput = document.getElementById("imagem-input");
    const salvarButton = document.getElementById("salvar-button");
    const cancelarButton = document.getElementById("cancelar-button");
    const projetoLista = document.getElementById("projeto-lista");
    const adicionarButton = document.getElementById("botao");

    let projetos = []; 

    adicionarButton.addEventListener("click", function() {
      projetoForm.style.display = "block";
    });
  
    cancelarButton.addEventListener("click", function() {
      projetoForm.style.display = "none";
      clearForm();
    });
  
    salvarButton.addEventListener("click", function() {
      const titulo = tituloInput.value;
      const descricao = descricaoInput.value;
      const imagem = imagemInput.value;
  
      if (titulo && descricao && imagem) {
        const projeto = {
          titulo: titulo,
          descricao: descricao,
          imagem: imagem
        };
  
        projetos.push(projeto);
        renderizarProjetos();
  
        projetoForm.style.display = "none";
        clearForm();
      }
    });
  
    function renderizarProjetos() {
      projetoLista.innerHTML = "";
  
      projetos.forEach(function(projeto, index) {
        const projetoElement = document.createElement("div");
        projetoElement.innerHTML = `
          <h3>${projeto.titulo}</h3>
          <p>${projeto.descricao}</p>
          <img src="${projeto.imagem}" alt="${projeto.titulo}" width="200">
          <button class="editar-button" data-index="${index}">Editar</button>
          <button class="excluir-button" data-index="${index}">Excluir</button>
        `;
  
        projetoLista.appendChild(projetoElement);
      });
  
      const editarButtons = document.getElementsByClassName("editar-button");
      const excluirButtons = document.getElementsByClassName("excluir-button");
  
      for (let i = 0; i < editarButtons.length; i++) {
        editarButtons[i].addEventListener("click", function(event) {
          const index = event.target.getAttribute("data-index");
          editarProjeto(index);

        editarProjeto(index);
    });
  }

  for (let i = 0; i < excluirButtons.length; i++) {
    excluirButtons[i].addEventListener("click", function(event) {
      const index = event.target.getAttribute("data-index");
      excluirProjeto(index);
    });
  }
}

function editarProjeto(index) {
  const projeto = projetos[index];
  projetoForm.style.display = "block";
  tituloInput.value = projeto.titulo;
  descricaoInput.value = projeto.descricao;
  imagemInput.value = projeto.imagem;

  salvarButton.removeEventListener("click", salvarProjeto);
  salvarButton.addEventListener("click", function() {
    salvarEdicaoProjeto(index);
  });
}

function salvarEdicaoProjeto(index) {
  const titulo = tituloInput.value;
  const descricao = descricaoInput.value;
  const imagem = imagemInput.value;

  if (titulo && descricao && imagem) {
    const projeto = {
      titulo: titulo,
      descricao: descricao,
      imagem: imagem
    };

    projetos[index] = projeto;
    renderizarProjetos();

    projetoForm.style.display = "none";
    clearForm();
  }
}

function excluirProjeto(index) {
  projetos.splice(index, 1);
  renderizarProjetos();
}

function clearForm() {
  tituloInput.value = "";
  descricaoInput.value = "";
  imagemInput.value = "";
}

});
