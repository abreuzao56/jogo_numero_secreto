let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto')
    exibirTextoNaTela('p', 'Escolhe um número entre 1 e 10')
}

exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou')
        let palavarTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavarTentativa}`
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else{ 
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número é menor')
        } else {
            exibirTextoNaTela('p', 'O número é maior')
        }

        tentativas++;
        limparCampo()
    }
}
    

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 3 + 1)
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}