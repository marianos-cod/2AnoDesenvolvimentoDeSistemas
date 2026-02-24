algoritmo "marianoex1correcao"

var
excesso, peso, multa, limite, taxa : real

inicio
limite <- 50.00
taxa <- 4.00
escreval ("Quanto quilos foram pescados?")
leia (peso)

se  (peso > limite) entao
    excesso <- peso - limite
    multa <- excesso*taxa
    escreval ("vc tem R$", multa, " a pagar")
    escreval ("o excesso de peso foi de ", excesso, " kg")
senao
    escreval ("vc não tem multas a pagar")
fimse
    


fimalgoritmo