// SEM return - calcula mas perde o valor
function calcularSem (preco, desconto) {
    var total = preco - (preco * desconto/100);
}

// COM return - devolve o valor calculado
function calcularSem (preco, desconto) {
    var total = preco - (preco * desconto/100);
    return total;
}

function testarSemReturn() {
    var resultado = calcularSem(100,50);
    document.getElementById('resultado').innerHTML = '<div class="alert alert-danger">' + 
     'Resultado: ' + resultado + 
     '(undefined - a função não evolveu nada)</div>';
}