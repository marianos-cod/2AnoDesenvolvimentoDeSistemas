//<div class="produto">
//           <img src="https://images.tcdn.com.br/img/img_prod/1176782/pirulito_psicodelico_colorido_g_c_01_unid_5528_1_6c0be476613bc11e7b2f8ce2ddf0c778.jpg" alt="">
//         <h1>PIRULITO</h1>
//            <p>R$ 20,00</p>
//            <button type="button">COMPRAR</button>
//            <button type="button">ADICIONAR AO CARRINHO</button>
//        </div>

function aula(){
    //variavel <- vetor de [1..3] de caracteres
    var filmes = [
        "Interestelar",
        "Menianas Malvadas",
        "Diabo veste prada 2"
    ];

    console.log(filmes);
    console.log(filmes[1]);
    console.log("Um filme que est[a estourando é " + filmes[0]);
    
    // push adiciona um elemento no final do vetor
    filmes.push("As branquelas");
    console.log(filmes);
    
    // unshift adiciona um elemento no inicio do vetor
    filmes.unshift("Homem aranha");
    console.log(filmes);
    
    // pop deleta o ultimo elemento do vetor
    filmes.pop();
    console.log(filmes);
    
    // shift deleta o primeiro elemento do vetor
    filmes.shift();
    console.log(filmes);

    // splice (indice, quantidade de elementos a serem deletados, elemento a ser adicionado)
    filmes.splice(1,1,);
    console.log(filmes);

    filmes.splice(1,1,"O diabo veste prada");
    console.log(filmes);

    filmes.splice(1,0,"Kill Bill vol 1 e 2");
    console.log(filmes);

}

aula()