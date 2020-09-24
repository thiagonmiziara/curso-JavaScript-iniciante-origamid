// verifique se a sua idade e maio do que a de algum parente
var idadeThiago = 33;
var idadeBell = 46;
if (idadeThiago > idadeBell) {
    console.log('É maior');
} else if (idadeThiago === idadeBell) {
    console.log("È igual");
} else {
    console.log("È menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - "  ") && (5 - 2);
console.log(expressao);

//Verifique se as seguintes variaveis sao truthy ou falsy
var nome = 'Thiago';
var idade = 33;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// compare o total de habitantes do Brasil com a China

var brasil = 207;
var china = 1340;
if (brasil > china) {
    console.log("Brasil tem mais habitantes que a china");

} else {
    console.log("China tem mais habitantes que o Brasil");
}

// o que ira aprarecer no console ?
if (('Gato' === 'gato') && (5 > 2)) {
    console.log("verdadeiro");
} else {
    console.log("falso"); // falso vai aparecer
}

//o que ira aparecer no console?
if (('Gato' === "gato") || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log("falso"); // vai aparecer cao.
}