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

  if (!validaPeso(peso)) {
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    // alterando o bkg utilizando o manipulador do javascript
    paciente.style.backgroundColor = "lightcoral";
  }

  if (!validaAltura(altura)){
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
    // adiconando uma classe css ao elemento
    paciente.classList.add("paciente-invalido");
  }

  if (alturaEhValida && pesoEhValido){
    tdImc.textContent = calculaImc(peso, altura);
  }
}

function calculaImc(peso, altura){
  return (peso / (altura * altura)).toFixed(2);
}

function clickNoTitulo() {
  console.log("Chamando método de clique no título");
}

function validaPeso(peso){
  return (peso > 0 && peso < 1000);
}

function validaAltura(altura) {
  return (altura > 0 && altura < 3.0);
}
