function executaOperacao(numero1, numero2, operacao) {
  return operacao(numero1, numero2);
}

function soma(numero1, numero2) {
  return numero1 + numero2;
} 


function multiplicacao(numero1, numero2) {
  return numero1 * numero2;
} 


function divisao(numero1, numero2) {
  return numero1 / numero2;
} 

console.log(executaOperacao(1 , 2, soma));
console.log(executaOperacao(1 , 2, multiplicacao));
console.log(executaOperacao(1 , 2, divisao));
