Algoritmo "Mariano massa"

Var
valora : inteiro
valorb : inteiro
nome : caractere
professor : caractere
USD : real
BRL : real
resposta : caractere
respost : caractere
Inicio
USD <- 0.16
professor <- "Victor Santos"
escreval ("Escreva seu nome : ")
leia (nome)
escreval ("Olá "+nome+", seja Bem Vindo!!")
escreval ("Aluno do "+professor)
escreval("Vamos Calcular a área do retangulo? (s/n)")
leia (resposta)
se (resposta = "s") entao
     escreval ("Vamos calcular!")
      escreval ("Digite o valor de base : ")
     leia (valora)
     escreval ("Digite o valor de altura : ")
     leia (valorb)
     escreval (valora*valorb)
senao
     escreval ("Tudo bem, vamos para a próxima pergunta!")
fimse
escreval ("Vamos converter o valor do Dólar hoje? (sim/nao)")
leia (respost)
      se (respost = "sim") entao
      escreval ("Quantos Reais vc quer converter?")
      leia (BRL)
      escreval (BRL*USD)
senao
      escreval ("Tudo bem, isso foi tudo por hoje")
fimse
Fimalgoritmo