Algoritmo "semnome"

Var
opcao : inteiro
valorTotal : real
cancelado : logico

Inicio
enquanto (verdadeiro) faca
   escreval  ("********************************")
   escreval  ("**********CHROME HEARTS*********")
   escreval  ("--------------------------------")
   escreval ("1) Ashtray - R$ 14649,54")
   escreval ("2) Sabonete - R$ 468,37")
   escreval ("3) Camiseta manga longa - R$ 4068,00")
   escreval ("4) Calça faded - R$ 275838,52")
   escreval ("5) Moletom - R$ 1488,55")
   escreval ("6) Caixa de fósforo - R$ 7806,30")
   escreval ("7) Bolsa couro e prata - R$ 77026,61")
   escreval ("8) FINALIZAR COMPRA")
   escreval ("9) SAIR")
leia (opcao)

escolha (opcao)
   caso 1
    valorTotal <- valorTotal + 14649
    escreval ("VALOR DA COMPRA : R$", valorTotal)
    limpaTela
   caso 2
    valorTotal <- valorTotal + 468
    escreval ("VALOR DA COMPRA : R$", valorTotal)
    limpaTela
   caso 3
    valorTotal <- valorTotal + 4068
    escreval ("VALOR DA COMPRA : R$", valorTotal)
    limpaTela
   caso 4
    valorTotal <- valorTotal + 275838
    escreval ("VALOR DA COMPRA : R$", valorTotal)
    limpaTela
   caso 5
    valorTotal <- valorTotal + 1488
    escreval ("VALOR DA COMPRA : R$", valorTotal)
    limpaTela
   caso 6
    valorTotal <- valorTotal + 7806
    escreval ("VALOR DA COMPRA : R$", valorTotal)
    limpaTela
   caso 7
    valorTotal <- valorTotal + 77026
    escreval ("VALOR DA COMPRA : R$", valorTotal)
    limpaTela
   caso 8
    escreval ("FINALIZANDO COMPRA")
    cancelado <- falso
    interrompa
   caso 9
    escreval ("SAINDO")
    cancelado <- verdadeiro
    interrompa
   outrocaso
     escreval ("Erro! Opção inválida")
   fimEscolha
fimEnquanto

se(cancelado)entao
   escreval ("pedido cancelado")
senao
   escreval ("VALOR FINAL R$ ", valorTotal)

fimSe

Fimalgoritmo