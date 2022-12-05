// trabalhando com switch


let nota = 2

switch (nota) {
    case 10:
    case 9:
    case 8:
        console.log("Aprovdo com lovou")
        break;
    case 7:
        console.log("Apenas aprovado")
        break;
    case 6: case 5:
        console.log("recuperação");
        break;
    case 4: case 3: case 2: case 1:
        console.log("reprovado")
        break

    default:
        console.log("nota invalida")
        break;
}