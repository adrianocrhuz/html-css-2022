let altura = 0;
let largura = 0;

function ajustaTamalhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth

    console.log(largura, altura)
}
ajustaTamalhoPalcoJogo()

function posicaoRandomica() {
    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;
    
    //operador ternario
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);
    
    //criar o elemento html - utilizar o DOM
    
    let mosquito = document.createElement('img');//criar elementos html
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = 'img-mosquito1'
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    
    document.body.appendChild(mosquito);
}


