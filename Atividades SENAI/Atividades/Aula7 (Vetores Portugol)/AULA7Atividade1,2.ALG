Algoritmo "Aula7.2"

Var
mercadorias : vetor [1..3] de caractere
valor : vetor [1..3] de real
i : inteiro
estoque : vetor [1..3] de inteiro
numeros : vetor [1..10] de inteiro
Inicio
//Atividade 1
mercadorias[1] <- "Shampoo"
mercadorias[2] <- "Condicionador"
mercadorias[3] <- "Creme"

escreval("As mercadorias são: ")
para i <- 1 ate 3 faca
     escreval(mercadorias[i])
fimPara
para i<- 1 ate 3 faca
     escreval("Digite o valor das mercadorias")
     leia (valor[i])
fimPara
limpaTela
escreval ("O total em reais é R$: ", valor[1]+valor[2]+valor[3])
para i <- 1 ate 3 faca
     escreval ("escreva o Número de estoque do produto :", mercadorias[i])
     leia (estoque[i])
     escreval(mercadorias[i], estoque[i])
fimPara
//Atividade 2
para i <-1 ate 10 faca
escreval("digite os numeros a serem reescrevidos em ordem contrária")
leia (numeros[i])
fimPara
escreval (numeros[10], numeros[9], numeros[8],numeros[7], numeros[6], numeros[5],numeros[4],numeros[3],numeros[2],numeros[1])
Fimalgoritmo