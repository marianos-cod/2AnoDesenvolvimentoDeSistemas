let produtos = ["Teclado", "Mouse", "Monitor", "Fone de Ouvido", "Gabinete"];

console.log("--- 1º Passo ---");
console.log(produtos[0]); 
console.log(produtos[produtos.length - 1]); 

console.log("\n--- 2º Passo ---");
let indice = produtos.indexOf("Gabinete");
if (indice !== -1) {
    produtos[indice] = "Webcam";
}
console.log(produtos);

console.log("\n--- 3º Passo ---");
for (let i = 0; i < produtos.length; i++) {
    console.log(`Produto disponível: ${produtos[i]}`);
}