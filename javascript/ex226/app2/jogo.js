let altura = 0;
let largura = 0;

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth

    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

function posicaoRandomica() {
    //criando valores aleatórios com Math.random()
    //comando  Math.floor arredonda os valores gerados aleatórios
    let posicaoX = Math.floor(Math.random() * largura) - 90;//diminuir em menos 90 para não estourar a img na tela window   
    let posicaoY = Math.floor(Math.random() * altura) - 90;
    
    //operador ternario
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);
    
    //criar o elemento html - utilizar o DOM
    
    let mosquito = document.createElement('img');//criar elementos html
    //atributos do html
    mosquito.src = 'imagens/mosca.png'
    //adicionar o estilo para diminuir a img
    mosquito.className = 'img-mosquito1'
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    
    document.body.appendChild(mosquito);
}


