let altura = 0;
let largura = 0;

function ajustaTamanhoPalcoJogo() {

    altura = window.innerHeight;
    largura = window.innerWidth;
    
    console.log(altura,largura)
}
ajustaTamanhoPalcoJogo()

function posicaoRandomica() {
    let posicaoX = Math.floor(Math.random() * altura) - 90;
    let posicaoY = Math.floor(Math.random() * largura) - 90;

    // operador ternário
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY)
    // criar elemento html utilizando o DOM}

    let mosquito = document.createElement('img');

    //atribuir a imagens do mosquito
    mosquito.src = "imagens/mosquito.png"
    //adicionar os estilos na img
    mosquito.className = tamanhoAleatorio()//'mosquito1' substitui

    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';

    document.body.appendChild(mosquito);

   //console.log(tamanhoAleatorio()) 
}
//tamanhos aleatórios dos mosquitos
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

