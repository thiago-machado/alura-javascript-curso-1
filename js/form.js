// evento de click no botão
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {

  /*
  preventDefault evita o funcionamento padrão. Ou seja, como
  button está dentro de um form, o funcionamento padrão do
  html é enviar os dados e recarregar a página.
  */
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteDoFormulario(form);

  var pacienteTr = montaTr(paciente);

  var erros = validaPaciente(paciente);
  if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return;
  }

  // adicionando tr com todos os tds na tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
  form.reset();
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = ""; // limpando as mensagens de erro
});

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = ""; // limpando a lista de erros antes de inserir as novas mensagens de erro
  /*
  Uma das maneiras de iterar arrays é usando foreach.
  No javascrit, um foreach possui a estrutura abaixo:
  */
  erros.forEach(function(erro){ // erro é cada um dos elementos do array erros
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
  return pacienteTr;
}

function montaTd(dado,classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function obtemPacienteDoFormulario(form) {
  // Criando objeto paciente
  // Todas as características desse objeto devem estar dentro de "{}"

  // Além disso, após cada característica, deve-se inserir uma ","
  // Com exceção da última característica

  // Cada caterística tem uma chave e um valor, e essas são separadas por ":"
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function validaPaciente(paciente) {
  var erros = [];
  if (paciente.nome.length == 0){
    erros.push("Nome não pode ser em branco");
  }

  if (paciente.gordura.length == 0){
    erros.push("Gordura não pode ser em branco");
  }

  if (paciente.peso.length == 0){
    erros.push("Peso não pode ser em branco");
  }

  if (paciente.altura.length == 0){
    erros.push("Altura não pode ser em branco");
  }

  if (!validaPeso(paciente.peso)){
    erros.push("Peso inválido");
  }

  if (!validaAltura(paciente.altura)){
    erros.push("Altura inválida");
  }
  return erros;
}
