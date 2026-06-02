// CLASSE DOCE
class Doce {
    constructor(nome, imagem, preco, categoria) {
        this.nome = nome;
        this.imagem = imagem;
        this.preco = preco;
        this.categoria = categoria;
    }

    gerarCard() {
        return `
            <div class='col-12 col-md-4 col-lg-3'>
                <div class='card h-100 shadow-sm'>
                    <img src='${this.imagem}' class='card-img-top' alt='${this.nome}'
                         style='height:180px; object-fit:cover;'>
                    <div class='card-body d-flex flex-column'>
                        <h5 class='card-title'>${this.nome}</h5>
                        <p class='text-muted'>${this.categoria}</p>
                        <p class='fw-bold text-success mt-auto'>
                            R$ ${this.preco.toFixed(2)}</p>
                        <button class='btn btn-primary btn-sm'
                                onclick='adicionarCarrinho("${this.nome}")'>
                            🛒 Comprar
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

// ARRAY DE PRODUTOS
var doces = [
    new Doce('Pirulito',
        'https://www.buildabirthday.co.nz/cdn/shop/files/RAINBOWJUMBO.jpg?v=1715031535',
        2.50, 'Bala'),
    new Doce('Sonho de Valsa',
        'https://images.tcdn.com.br/img/img_prod/1225570/sonho_de_valsa_20g_unidade_1677_1_79762930ee3ce201b3e1f8574cf0ba1a.png',
        5.99, 'Bombom'),
    new Doce('Talento',
        'https://destro.fbitsstatic.net/img/p/chocolate-talento-avelas-85g-80676/267231.jpg',
        10.50, 'Chocolate'),
    new Doce('Kit Kat',
        'https://placehold.co/300x200/1a2744/ffffff?text=Kit+Kat',
        7.00, 'Chocolate'),
    new Doce('Bis',
        'https://placehold.co/300x200/2d5a27/ffffff?text=Bis',
        3.50, 'Chocolate'),
    new Doce('Paçoca',
        'https://placehold.co/300x200/ca6f1e/ffffff?text=Pacoca',
        1.50, 'Bala'),
];

// CARRINHO
var carrinho = [];

function adicionarCarrinho(nome) {
    carrinho.push(nome);
    document.getElementById('qtdCarrinho').textContent = carrinho.length;
    alert(`${nome} adicionado ao carrinho! 🛒`);
}

// RENDERIZAR PRODUTOS
function renderizarProdutos(lista) {
    var container = document.getElementById('produtos');
    container.innerHTML = '';

    if (lista.length === 0) {
        container.innerHTML = `
            <div class='col-12 text-center py-5'>
                <p class='text-muted fs-4'>Nenhum doce encontrado...</p>
            </div>
        `;
        return;
    }

    lista.map(doce => {
        container.innerHTML += doce.gerarCard();
    });
}

// BUSCAR POR NOME
function buscarDoce() {
    var termo = document.getElementById('busca').value.toLowerCase();

    var resultado = doces.filter(doce => {
        return doce.nome.toLowerCase().includes(termo);
    });

    renderizarProdutos(resultado);
}

// INICIAR
renderizarProdutos(doces);