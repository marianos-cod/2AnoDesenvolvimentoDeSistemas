Algoritmo "ex1aula6"
//EXERCICIO 1
Var
i2, indice: inteiro
val_inicial, val_final: real
entradaUsuario, acumuladorSoma: real
numBase, numA, numB, numTotal: inteiro
valorImpar: real
it: inteiro

procedimento LerESomar()
Inicio
   indice <- 1
   acumuladorSoma <- 0

   repita
      Escreva("Escreva o ", indice, "º número: ")
      Leia(entradaUsuario)

      acumuladorSoma <- acumuladorSoma + entradaUsuario

      indice <- indice + 1
   ate indice > 10
fimprocedimento

procedimento MostrarSoma()
Inicio
   Escreval("")
   Escreval("A soma de todos os valores digitados é: ", acumuladorSoma)
fimprocedimento

Inicio
// EXECUÇÃO EXERCICIO 1
LerESomar()
MostrarSoma()

---
// EXERCICIO 2
Escreval("Escolha um valor")
leia(val_inicial)
Escreval("Escolha outro valor")
leia(val_final)
Escreval("Agora veremos qual é maior e qual é menor")

Se (val_inicial = val_final) entao
   Escreval("")
   Escreval("Pelo visto os dois valores são iguais, não há um menor nem um maior")
   Escreval("")
fimse

Se (val_inicial > val_final) entao
   Escreval("")
   Escreval(val_inicial, " é maior que ", val_final)
   Escreval("")
fimse

Se (val_inicial < val_final) entao
   Escreval("")
   Escreval(val_final, " é maior que ", val_inicial)
   Escreval("")
fimse

---
// EXERCICIO 3
Escreval("Vou contar de 1 a 100 e a cada múltiplo de 10 irei comentar")
para it de 1 ate 100 faca
   escreva(it)

   se (it % 10 = 0) entao
      escrevaL(" - Múltiplo de 10")
   senao
      escrevaL("")
   fimse
fimpara

---
// EXERCICIO 4
Escreval("Aqui irei mostrar todos os números impares entre 100 e 200")
para it de 100 ate 200 faca
   se it mod 2 <> 0 entao
      Escreval(it)
   fimse
fimpara

Fimalgoritmo