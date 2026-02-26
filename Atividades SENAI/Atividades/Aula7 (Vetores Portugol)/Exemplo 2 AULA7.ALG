Algoritmo "Exemplo Aula7"
Var
nomes : vetor[1..3] de caractere
bimestre1 : vetor[1..3] de real
bimestre2 : vetor[1..3] de real
bimestre3 : vetor[1..3] de real
i : inteiro
mediaFinal : vetor[1..3] de real

Inicio
para i <- 1 ate 3 faca
   escreval("Qual ? o nome do aluno do",i,"? Aluno?")
   leia(nomes[i])
   escreval("qual foi a nota no primeiro bimestre?")
   leia(bimestre1[i])
   escreval("qual foi a nota no segundo bimestre?")
   leia(bimestre2[i])
   escreval("qual foi a nota no terceiro bimestre?")
   leia(bimestre3[i])
    LimpaTela
mediaFinal[i] <- (bimestre1[i] + bimestre2[i] + bimestre3[i])/3
fimPara

para i <- 1 ate 3 faca
se(mediafinal[i] <= 7) entao
  escreval(nomes[i]," Est? reprovado com",mediafinal[i]," de media.")
  senao
  escreval(nomes[i]," Est? aprovado com",mediafinal[i]," de media.")

fimSe
fimPara
Fimalgoritmo