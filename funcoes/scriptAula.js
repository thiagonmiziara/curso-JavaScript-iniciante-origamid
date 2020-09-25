function areaQuadrado(lado) {
    return lado * lado
}
console.log(areaQuadrado(5));

function pi() {
    return 3.14;
}

var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}
console.log(imc(110, 1.78));

function corFavorita(cor) {
    if (cor === "azul ") {
        return "Eu gosto do céu";
    } else if (cor === "verde") {
        return " Eu gosto de floresta";
    } else {
        return " Eu não gosto de nada ";
    }

}
console.log(corFavorita("azul "));


addEventListener('click', function() {
    console.log('oi');
})

function imc2(peso2, altura2) {
    const imc1 = peso2 / (altura2 ** 2);
    console.log(imc1);

}

imc2(80, 1.80);
console.log(imc2(800, 1.80));


function terceiraIdade(idade) {
    console.log(typeof idade);
    if (typeof idade !== 'number') {
        return 'Por favor preencha um numero';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}
console.log(terceiraIdade(60));


function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Falta visitar ${totalPaises - paisesVisitados} paises `
}

//console.log(totalPaises);

var profissao = 'Front-End';

function dados() {
    var nome = ' Thiago ';
    var idade = 32;

    function outrosDados() {
        var endereco = "Uberlândia";
        var idade = 33;
        return `${nome} , ${idade} , ${endereco} , ${profissao}`;
    }
    return outrosDados();
}

console.log(dados());