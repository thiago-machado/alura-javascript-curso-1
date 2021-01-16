// exibe um popup
//alert("Olá mundo");

// exibe uma mensagem no log do navegador
console.log("Exibindo mensagem no console...");

// pegando a tag e seu conteudo em <h1>
var titulo = document.querySelector("h1");
console.log("Título usando a tag: ", titulo.textContent);
// alterando o conteúdo da tag
titulo.textContent = "Aparecida Nutricionista";

// pegando a tag e seu conteudo usando a classe
var tituloPorClasse = document.querySelector(".titulo");
console.log("Título usando a classe: ", tituloPorClasse.textContent);

// calculando IMC
var paciente = document.querySelector("#primeiro-paciente");

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
}

if (altura <= 0 || altura >= 3.00){
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaEhValida && pesoEhValido){
    tdImc.textContent = peso / (altura * altura);
}
