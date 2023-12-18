//Definindo a dimensao da area do palco do jogo
let altura = 0
let largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo() 

function posicaoRandomica() {
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento html
    let mosquito = document.createElement('img')
    mosquito.src = "../app2/imagens/mosquito.png"
    mosquito.className = 'mosquito1'
    //mosquito.classList = "mosquito1"
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito) 
}

