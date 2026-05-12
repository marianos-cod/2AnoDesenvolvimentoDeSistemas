const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// O "path.join(__dirname, '../')" avisa o servidor que o index.html e as imagens 
// estão na pasta raiz, e não dentro da pasta "scripts".
app.use(express.static(path.join(__dirname, '../')));

let totalJogadores = 0;
let cenaAtual = 'prologo';
let historicoPaths = [];

io.on('connection', (socket) => {
    totalJogadores++;
    console.log(`Novo jogador conectado. Total: ${totalJogadores}`);

    // Avisa todos sobre o novo número de jogadores
    io.emit('update_players', totalJogadores);

    // Sincroniza o jogador novato com a fase em que o jogo está agora
    socket.emit('estado_inicial', { cena: cenaAtual, paths: historicoPaths });

    // Quando um jogador faz uma escolha
    socket.on('escolha_feita', (dados) => {
        cenaAtual = dados.target; // Atualiza a cena atual no servidor
        
        if (dados.pathName) {
            historicoPaths.push(dados.pathName);
        }
        if (dados.target === 'prologo') {
            historicoPaths = []; // Reinicia o histórico se o jogo for resetado
        }

        // Manda o comando para mudar a tela de TODOS os navegadores conectados
        io.emit('mudar_cena_geral', dados);
    });

    socket.on('disconnect', () => {
        totalJogadores--;
        console.log(`Jogador saiu. Total: ${totalJogadores}`);
        io.emit('update_players', totalJogadores);
    });
});

http.listen(3000, () => {
    console.log('🌐 Servidor rodando! Abra http://localhost:3000 no seu navegador.');
});