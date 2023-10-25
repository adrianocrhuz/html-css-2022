// definindo a dimensao da area do palco do jogo
let altura = 0
let largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura,largura)
}
// adicionar a função no body usando o onresize
ajustaTamanhoPalcoJogo() 

function posicaoRandomica() {
    //criando a posição randomica
let posicaoX = Math.floor(Math.random() * largura) - 90 //decresmento de 90 px menor para não estourar a img na tela
let posicaoY = Math.floor(Math.random() * altura) - 90

//criar um controle caso a posição seja zero usar o operador ternário
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY // posição y for menor que zero, caso contrario recebe ela mesmo

console.log(posicaoX,posicaoY)

//criar o elemento html
//criar uma variável
let mosquito = document.createElement('img')
//adicionar no body a img
mosquito.src = 'imagens/mosquito.png'
//diminuir o tamanho do mosquito
mosquito.className = 'mosquito1'
//personalizar o css via JS
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'

//adicionar o elemento dentro do bady
document.body.appendChild(mosquito)
}

