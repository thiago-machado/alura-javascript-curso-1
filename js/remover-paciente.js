/*var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
paciente.addEventListener("dblclick", function() { // adicionando função de uplo clique em cada tr de paciente

// Revomendo o paciente que foi clicado.
// Nós não usamos a variável paciente para remover o elemento pois essa variável está
// declarada fora da função. Logo, usamos o this para referenciar o elemento cujo evento
// foi acionado.

this.remove();
});
});*/

var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event) { // adicionando evento de duplo click na tabela
  if (event.target.tagName != 'TD') {
    return;
  }
  var alvoEvento = event.target; // pegando quem foi o alvo do click, no caso, a td
  var paiDoAlvo = alvoEvento.parentNode; // pegando o nó pai do alvo, no caso, o pai da td é um tr

  event.target.parentNode.classList.add("fadeOut"); // adiconando classe que aplica opacidade até 0 em 0.5s
  setTimeout(function() { // vai executar a função após 500 ms
    paiDoAlvo.remove(); // removendo tr
  }, 500);
});
