function aula(){
    // enquanto () faca ...
    // para con ate con2 interable
    var i = 0;

    while (i < 10) {
        console.log(i);
        i++;
    }

    while (true) {
        var resposta = prompt("Repete? ");
        
        if (resposta === false) {
            break;
        }
    }
    for (var i=0;i<100;i++){
        document.querySelector("body").innerHTML += "<p>" + i + "</p>";
    }
    // faz e verufica (aceita false)
    // do {
    // console.log(i);
    //     i++;
    // }  
}
function produtos(){
    for(var i = 0; i < 10; i++){
        document.querySelector("#produtos").innerHTML += `
        <div class="produto">
            <img src="https://images.tcdn.com.br/img/img_prod/1176782/pirulito_psicodelico_colorido_g_c_01_unid_5528_1_6c0be476613bc11e7b2f8ce2ddf0c778.jpg" alt="">
            <h1>PIRULITO</h1>
            <p>R$ 20,00</p>
            <button type="button">COMPRAR</button>
            <button type="button">ADICIONAR AO CARRINHO</button>
        </div>
        `;
    }
}
produtos();