
let altura = 0
let largura = 0
let vidas = 1

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura,altura)
}
ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        
        //console.log('elemento selecionado foi: v' + vidas)
        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
            //alert('Interroper o jogo(game over)')

        } else {
            document.getElementById('v' + vidas).src = "../app2/imagens/coracao_vazio.png"
            vidas++
        }
    }
    
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento html através do DOM
    let mosquito = document.createElement('img')
    mosquito.src = "../app2/imagens/mosquito.png"
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        //alert('elemento clicado a tempo')
        this.remove()
    }

    document.body.appendChild(mosquito)
    //console.log(tamanhoAleatorio())
    
    //console.log(ladoAleatorio())
}
//taanhos randomicos
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
//lado A e Lado B
function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)
    //console.log(classe)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

