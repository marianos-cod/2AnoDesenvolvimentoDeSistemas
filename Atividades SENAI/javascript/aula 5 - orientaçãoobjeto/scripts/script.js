// var nomeP = "Homem Aranha Noir";
// var vidaP = 3;

// personagens = [
//     ["Homem Aranha Noir", 3]
// ]

class Personagem {
    nome;
    vida;
    tamanho;
    velocidade;
    habilidade;
    atacar(){};
    abaixar(){};
    pular(){};
}

p1 = new Personagem()
p1.nome = "Homem Aranha Noir"
p1.vida = 4;
p1.tamanho = "Medio";
p1.velocidade = "Normal";
p1.habilidade = ["Atletico","Spider", "Armas "]

class PersonagensEspeciais{
    constructor(nome, vida,tamanho,velocidade,habilidade){
        this.nome = nome;
        this.vida = vida;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
        this.habilidade = habilidade;
    }
}