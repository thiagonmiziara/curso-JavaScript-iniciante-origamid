var possuiGraduacao = true;
var possuiDoudorado = false;

if (possuiGraduacao) {
    console.log(" Possui graduação");
} else if (possuiDoudorado) {
    console.log("Não possui graduação");
}

var nome = "";

if (nome) {
    console.log(nome);
} else {
    console.log("Nome não existe");
}

var comparacao = 10 >= 5;
console.log(comparacao);

if ((5 - 5) && (5 + 5)) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}

var condicional = (5 - 10) && (5 + 5);
if (condicional) {
    console.log("Verdadeiro", condicional);
} else {
    console.log("Falso");
}

var condicional2 = (5 - 5) || (5 + 5) && (10 - 2);
console.log(condicional2);


var corFavorita = "amarelo";

switch (corFavorita) {
    case "azul":
        console.log("Olhe para o céu");
        break;

    case "amarelo":
        console.log('Olhe para o sol');
        break;

    case "verde":
        console.log("Olhe para a floresta");
        break;



    default:
        console.log('Feche os olhos');
}