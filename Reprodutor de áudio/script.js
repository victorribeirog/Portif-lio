const botaoPlayPause = document.getElementById('play-pause')
const audioCapitulo = document.getElementById('audio-capitulo')
const botaoProximo = document.getElementById('proximo')
const botaoAnterior = document.getElementById('anterior')
const nomeCapitulo = document.getElementById('capitulo')
const numeroCapitulos = 10
let taTocando = 0
let capituloAtual = 1

function tocarFaixa(){
    audioCapitulo.play()
    botaoPlayPause.classList.remove('bi-play-circle-fill')
    botaoPlayPause.classList.add('bi-pause-circle-fill')
}

function pausarFaixa(){
    audioCapitulo.pause()
    botaoPlayPause.classList.remove('bi-pause-circle-fill')
    botaoPlayPause.classList.add('bi-play-circle-fill')
}

function tocarPausar(){
    if (taTocando === 0) {
        tocarFaixa()
        taTocando=1
    } else {
        pausarFaixa()
        taTocando=0
    }
}

function trocarNome(){
    nomeCapitulo.innerText = `Capítulo ${capituloAtual}`
}


function proximaFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1
    }else{
        capituloAtual += 1
    }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + '.mp3'
    tocarFaixa()
    taTocando=1
    trocarNome()
}

function voltarFaixa(){
    if(capituloAtual === 1){
        capituloAtual = numeroCapitulos
    }else{
        capituloAtual -= 1
    }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + '.mp3'
    tocarFaixa()
    taTocando=1
    trocarNome()
}
botaoPlayPause.addEventListener('click', tocarPausar)
botaoProximo.addEventListener('click', proximaFaixa)
botaoAnterior.addEventListener('click', voltarFaixa)