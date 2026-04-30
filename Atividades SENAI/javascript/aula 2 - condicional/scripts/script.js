var nome = "Miranha";
var vida = 3;
var moeda = 0;
var dano = 1;

function mostrarPersonagem(){
    
    document.getElementById("ficha").innerHTML = `
    <img src="/images/maxresdefault.jpg" id="miranha" alt="Miranha">
     <h1>🕷️🕸️ ${nome} </h1>
     <p>❤️ ${vida} </p>
     <p>🪙 ${moeda} </p>
     <p>⚔️ ${dano} </p>
    
    `;
}
document.getElementById("vida").addEventListener("click",addVida)
function addVida(){
    if(vida > 19){
      alert("LIMITE DE VIDA");
    }else{
        vida++;
    }
   
    mostrarPersonagem();
}

document.getElementById("moeda").addEventListener("click",addMoeda)
function addMoeda(){
    var quantMoedas = confirm("adicionar 1 ou personalizado?");
    if(quantMoedas){
        moeda++;
    }else{
        moeda = Number(prompt("qual a quantidade de moedas?"))
    }
    
    mostrarPersonagem();
}

document.getElementById("dano").addEventListener("click",addDano)
function addDano(){
    var arma = prompt(`Qual arma o ${nome} está segurando?`)
    switch(arma){
        case "teia":
        alert("você selecionou teia! 3 de dano e 10s de atordoamento");
        dano = 3;
        break;

        case "soco":
        alert("você selecionou soco! 8 de dano");
        dano = 8;
        break;

        case "chute":
        alert("você selecionou chute! 10 de dano");
        dano = 10;
        break;

        default: 
        alert("arma não encontrada! tente novamente");
    }
    mostrarPersonagem();
}

mostrarPersonagem();