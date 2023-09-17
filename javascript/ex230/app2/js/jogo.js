/*Definindo o palco do jogo, localizar a altura e largura*/
let altura = 0
let largura = 0

function ajustaTamanhoPalcoDoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura,largura)
}
ajustaTamanhoPalcoDoJogo()

// 7 passo remover o mosquito anterior (caso exista)
if(document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()
}

//Criar uma função randomica para a img
function posicaoRandomica() {
    //para torna aleatorio o valor multiplicar
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90 // para não ter barra de rolagem diminuir
    
    // 4 passo criar o operador ternário da posicaoX e posicaoY para a img não sumir
    posicaoX = posicaoX < 0 ? 0 : posicaoX 
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    console.log(posicaoX,posicaoY)

    // 2 passo criar o elemento html img
    let mosquito = document.createElement('img')
    //adiciona no html a img no body
    mosquito.src = 'imagens/mosquito.png'

    //chamar ou estilizar a class mosquito1
    mosquito.className = tamanhoAleatorio() + '' + ladoAleatotio() // remover essa classe'mosquito1'

     //criar os estilos do css da img
     mosquito.style.left = posicaoX + 'px'
     mosquito.style.top = posicaoY + 'px'
     mosquito.style.position = 'absolute'

     //7 passo fazer o mosquito desaparece depois de um tempo
     mosquito,id = 'mosquito'
    
    
    // 3 passo no body chamar essa img
    document.body.appendChild(mosquito)

    //5 passo console.log(tamanhoAleatorio())

   // 6 passo console.log(ladoAleatotio()) 
}
//5 passo criar tamanhos diferentes dos mosquitos
function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)

    console.log(classe)

    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
// 6 passo posicionamento de modo aleatotio ladoA e ladoB

function ladoAleatotio() {
    let classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

    }
}