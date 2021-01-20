var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){

  /*
  O XMLHttpRequest é um objeto do JS responsável por fazer requisições HTTP.
  O trecho XML do nome indica que ele era utilizado anteriormente para realizar
  o transporte de dados do tipo XML, no entanto, atualmente ele consegue trafegar
  outros tipos de dados, como textos.
  */
  var xhr = new XMLHttpRequest();

  // no método open, passamos o verbo e a URL da API
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  // Criando evento que vai ficar "escutando" até uma resposta ser recebida
  // Essa requisição assíncrona no JS tem o nome de Ajax
  xhr.addEventListener("load", function() {
    if (xhr.status == 200) {
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta); // reaizando parse
      pacientes.forEach(function(paciente) { // iterando cada item da lista e adicionando na tabela
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
});

// enviando a requisição
xhr.send();
});
