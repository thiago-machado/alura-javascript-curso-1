// exibe um popup
//alert("Olá mundo");

// exibe uma mensagem no log do navegador
console.log("Exibindo mensagem no console...");

// pegando a tag e seu conteudo em <h1>
var titulo = document.querySelector("h1");
console.log("Título usando a tag: ", titulo.textContent);

// pegando evento de click no título
titulo.addEventListener("click", function (){
  console.log("Essa é uma função anônima.")
});
titulo.addEventListener("click", clickNoTitulo);

// alterando o conteúdo da tag
titulo.textContent = "Aparecida Nutricionista";

// pegando a tag e seu conteudo usando a classe
var tituloPorClasse = document.querySelector(".titulo");
console.log("Título usando a classe: ", tituloPorClasse.textContent);

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
  // calculando IMC
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var imc = peso / (altura * altura);
  var tdImc = paciente.querySelector(".info-imc");

  // condições lógicas
  var pesoEhValido = true;
  var alturaEhValida = true;

  if (peso <= 0 || peso >= 1000) {
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    // alterando o bkg utilizando o manipulador do javascript
    paciente.style.backgroundColor = "lightcoral";
  }

  if (altura <= 0 || altura >= 3.00){
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
    // adiconando uma classe css ao elemento
    paciente.classList.add("paciente-invalido");
  }

  if (alturaEhValida && pesoEhValido){
    tdImc.textContent = (peso / (altura * altura)).toFixed(2);
  }

}

// evento de click no botão
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
  /*
  preventDefault evita o funcionamento padrão. Ou seja, como
  button está dentro de um form, o funcionamento padrão do
  html é enviar os dados e recarregar a página.
  */
  event.preventDefault();
  console.log("Oi eu sou o botao e fui clicado");

  var form = document.querySelector("#form-adiciona");

  /*
  Os elementos input normalmente possuem um name.
  Com isso, é possível pegar cada input usando seu name diretamente.
  Ex.: form.nome nos traz o elemento input de name "nome" que está
  contido dentro de form.
  */
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  // criando um elemento tr
  var pacienteTr = document.createElement("tr");

  // criando elementos tds
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  // adicionando tds ao tr
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  // adicionando tr com todos os tds na tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
});

function clickNoTitulo() {
  console.log("Chamando método de clique no título");
}
