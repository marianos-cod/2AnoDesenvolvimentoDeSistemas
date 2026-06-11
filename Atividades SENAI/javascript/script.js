// Exemplo 1: Declarando e inicializando um array vazio
console.log('\n -- Exemplo 1: Array Vazio --')
let meuArrayVazio = []
console.log(meuArrayVazio)

// Exemplo 2: Declarando arrays com elementos
console.log('\n --- Exemplo 2: Arrays com Elementos --');
let frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];
let numeros = [10, 20, 30 , 40, 50];
let misto = ['Text', 123, true, null];
console.log('Frutas:', frutas);
console.log('Números:', numeros);
console.log('Misto:', misto);

// Exemplo 3: Acessando elementos de um Array
console.log('\n -- Exemplo 3: Acessando elementos por índice --')
console.log('Primeira fruta:', frutas[0]);
console.log('Terceiro número:', numeros[2]);

// Exemplo 4: Modificando elementos de um array
console.log('\n -- Exemplo 4: Modificando elementos --');
frutas[2] = 'Pera';
console.log('Frutas modificadas:', frutas);

// Exemplo 5: Tamanho array
console.log('\n -- Exemplo 5: Tamanho dos arrays')
console.log('\n -- Exemplo 5: Tamanho do array de frutas:', frutas.length);

// Exemplo 6: Adicionando elementos ao final(push)
console.log('\nExemplo 6: Adicionando elementos com push');
frutas.push('Manga')
console.log('Frutas após push', frutas)
