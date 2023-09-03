let altura = 0;
let largura = 0;

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura,largura) 
}
ajustaTamanhoPalcoJogo()
// função randomica para a img

function posicaoRandomica() {
    let posicaoX = Math.floor(Math.random()* altura) - 90;
    let posicaoY = Math.floor(Math.round()* largura) - 90;

    //Criar operador ternário
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    //criar o elemento da img

    let mosquito = document.createElement('img');
    // adicionar a imagens via js
    //adicionar img
    mosquito.src = "imagens/mosquito.png"

    //criar os estilos do css
    mosquito.className = tamanhoAleatotio() //'mosquito1'

    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito);

    console.log(ladoAleatorio())

    //console.log(tamanhoAleatotio())
}
    //tamanho aleatório do mosquito
    function tamanhoAleatotio() {
        let classe = Math.floor(Math.random()* 3)
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
    // lado a lado
    function ladoAleatorio() {
        let classe = Math.floor(Math.random() * 2)

        switch(classe) {
            case 0:
                return 'ladoA'
            case 1:
                return 'ladoB'
        }
    }

