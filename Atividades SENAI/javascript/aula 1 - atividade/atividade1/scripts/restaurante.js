var clientes = Number(prompt("Quantas pessoas estão na mesa?"))
var numero1 = Number(prompt("Qual é o valor da primeira conta?"));
var numero2 = Number(prompt("Qual é o valor da segunda conta?"));
var numero3 = Number(prompt("Qual é o valor da terceira conta?"));
var numero4 = Number(prompt("Qual é o valor da quarta conta?"));
let total = numero1 + numero2 + numero3 + numero4
let totalParaCada = total / clientes

alert("O valor total da conta é: " + total)
alert("O valor total da conta para cada se vocês racharem é: " + totalParaCada)