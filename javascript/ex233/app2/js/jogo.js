//encontra a largura e altura
let altura = 0
let largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}
ajustaTamanhoPalcoJogo()

//criando posicao randomica
function posicaoRandomica() {
    let posicaoX = Math.floor(Math.random() * altura) - 90
    let posicaoY = Math.floor(Math.random() * largura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoX = posicaoY < 0 ? 0 : posicaoY
    
    console.log(posicaoX, posicaoY)

    //criar o elemento html
    let mosquito = document.createElement('img')
    mosquito.src = '../app2/imagens/mosquito.png'
    mosquito.className = 'tamanhoAleatorio()' //mosquito1
    mosquito.style.left = 'posicaoX' + 'px'
    mosquito.style.top = 'posicaoY' + 'px'
    mosquito.style.position = 'Absolute'

    document.body.appendChild(mosquito)

   // console.log(tamanhoAleatorio())
}
//tamanhos randomicos
function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)
    //console.log(classe)
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        
        case 2:
            return 'mosquito3'
    }
}
