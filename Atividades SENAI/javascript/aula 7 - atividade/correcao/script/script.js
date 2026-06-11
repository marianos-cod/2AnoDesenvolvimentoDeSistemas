const nomeJogador = "JoãoGamer"; // constante (não pode alterar)
let idade = 16;    //number
let online = true; //boolean

// Objeto com o jogo favorito
let jogoFavorito = {
    nome: "GTA V",
    anoLancamento: 2013
};

// Array com últimas 3 potuações
let pontuacoes = [1500, 2000, 1800];

// Mostrando os valores e seus tipos no console
console.log("Nome:", nomeJogador, "Tipo:", typeof nomeJogador);
console.log("Idade:", idade, "Tipo:", typeof idade);
console.log("Online:", online, "Tipo:", typeof online);
console.log("Jogo Favorito:", jogoFavorito, "Tipo:", typeof jogoFavorito);
console.log("Pontuações:", pontuacoes, "Tipo:", typeof pontuacoes);

// Mudando valores da idade e do status online
idade = 17;
online = false;
console.log("Nova idade:", idade);
console.log("Novo status online:", online);