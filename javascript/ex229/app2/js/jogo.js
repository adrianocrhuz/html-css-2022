/*Definindo a dimensão do palco do jogo, encontrar a altura e largura da tela*/
let altura = 0
let largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}
ajustaTamanhoPalcoJogo()

/*Criar uma função randomica para a img*/
function posicaoRandomica() {
    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
    }
    let posicaoX = Math.floor(Math.random() * altura) - 90 //para a img não trapassar a dimensão da tela
    let posicaoY = Math.floor(Math.random() * largura) - 90 //para a img não trapassar a dimensão da tela

    //criar o operador ternário da posicaoX e posicaoY 
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //criar o elemento html da img
    let mosquito = document.createElement('img')
    //adionar a img via JS
    mosquito.src = "imagens/mosquito.png"
    //Chamar a class mosquito1
    mosquito.className = tamanhoAleatorio() + ' ' + LadoAleatorio() //'mosquito1'

    //criar os estilos do css da img
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    //aplicar um id para que apareça um mosquito a cada intervalo
    mosquito.id = 'mosquito'

    //escrever a img de forma programatica no body
    document.body.appendChild(mosquito)

    console.log(LadoAleatorio())
    //console.log(tamanhoAleatorio())
}
//Tamanho aleatorio do mosquito

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)
    //console.log(classe)

    //definir o tamanho do mosquito
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
//Posicionamento do mosquito aleatoriamente, ladoA e LadoB

function LadoAleatorio() {
    let classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}