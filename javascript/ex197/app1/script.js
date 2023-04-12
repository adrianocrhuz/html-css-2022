function calcular(tipo, valor) {
    //console.log(tipo, valor)

    if(tipo === 'acao') {

        if(valor === 'c') {
            //limpar o visor (id resultado)
        document.getElementById("resultado").value = ''
        }
        if(valor === '+' ) {
            document.getElementById("resultado").value += valor
        }

        

    } else if(tipo === 'valor') {
        //var valor_campo = document.getElementById("resultado").value
        document.getElementById("resultado").value += valor
    }
}