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
