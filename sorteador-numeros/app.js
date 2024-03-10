function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
        numero = obterNumeroAleatorio(de, ate);
    }
        sorteados.push(numero);
}

    let resultado = document.getElementById('resultado');
    let palavraNumero = quantidade > 1 ? 'Números' : 'Número';
    resultado.innerHTML = `<label class="texto__paragrafo">${palavraNumero} sorteados: ${sorteados}</label>`
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function limparCampo() {
    campo1 = document.getElementById('quantidade');
    campo2 = document.getElementById('de');
    campo3 = document.getElementById('ate');
    campo1.value = '';
    campo2.value = '';
    campo3.value = '';
}

function mensagemInicial() {
    mensagem = document.getElementById('resultado')
    mensagem.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
}

function reiniciar() {
    document.getElementById('btn-reiniciar').setAttribute('disabled', true);
    limparCampo();
    mensagemInicial();
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');

    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

