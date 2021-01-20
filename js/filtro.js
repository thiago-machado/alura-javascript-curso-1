var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){ // função que captura os caracteres digitados pelo usuário
  console.log(this.value);
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0){ // caso a pessoa tenha digitado algo, entra no if
    for (var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      var expressao = new RegExp(this.value, "i"); // criando expressão regular case-insensitive
      if (!expressao.test(nome)) { // caso o nome da tabela contenha um pedacinho do que foi digitado, exibe o resultado
        paciente.classList.add("invisivel"); // adicionando classe que esconde todas as linhas que nao atendem e validação
      } else {
        paciente.classList.remove("invisivel"); // removendo classe que mantem invisivel caso encontre alguém
      }
    }
  } else { // senão, exibe todos os itens da tabela
    for (var i = 0; i < pacientes.length; i++) {
      pacientes[i].classList.remove("invisivel");
    }
  }
});
