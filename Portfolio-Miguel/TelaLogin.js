function redirecionarParaEditor(event) {
      event.preventDefault();
      var user = document.getElementById("user").value;
      var senha = document.getElementById("senha").value;
      if (user !== '' && senha !== ''){
         window.location.href = "MenuEditor.html";
      }else{
         alert("Preencha os campos de usuário e senha");
      }
}
    
  


