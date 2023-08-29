alert("Olá, seja bem vindo a Frutaria da Sophia")

const frutas = prompt("Escolha seus produtos " +
"n 1 - maça" +
" n 2 - Uva" +
" n 3 - Morango");


switch(frutas) {
    case "1":
    alert("A maça custa R$ 5,49 kg")
    break

    case "2":
        alert("Uva estamos em falta")
        break
    
    case "3":
        alert("Morango a bandeja sai por R$ 10,00")
        break

        default:
        alert("Não temos esse produto no momento")
}