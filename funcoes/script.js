// crie uma função para verificar se um falor é truthy

function verificar(numero, numero2) {
    if (numero === numero2) {
        return true;
    } else {
        return false;
    }

}
console.log(verificar(40, "40"))

// Crie uma função  matemática que retorne o preimetro de um quadrado

function perimetroQuadrado(lado1, lado2, lado3, lado4) {
    let soma = lado1 + lado2 + lado3 + lado4;
    return `O perimetro quadrado é ${soma}`;
}
console.log(perimetroQuadrado(4, 4, 4, 4));

// crie uma função que retorne seu nome completo

function nomeCompleto(nome, sobrenome) {
    let resultado = nome + sobrenome;
    return `Seu nome completo é ${resultado}`
}
console.log(nomeCompleto("Thiago", " Miziara"));

// crie uma função que verificar se o numer é  par

function parOuImpar(par) {
    let numero = par
    if ((numero * numero) / 2 % numero === 0) {
        return "É par"
    } else {
        return "É impar"
    }
}
console.log(parOuImpar(10));

// crie uma função que retorne o tipo de dado do argumento passado nela

function argumento(numero) {
    console.log(typeof numero)
    if (typeof numero !== "number") {
        return "Por favor preencha um número"
    } else if (numero === 33) {
        return `isso sim é um número ${numero}`
    } else {
        return "Digite o número 33"
    }
}
console.log(argumento(33));


// crie um evento que quando scroll apareca seu nome completo // obs fiz com dblclick pq a página nao tem como scrollar.
addEventListener('dblclick', function() {
    console.log("Thiago Nunes Miziara")
})

// corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados}`;
}

function javisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total  de  ${totalPaises} paises`;
}


console.log(precisoVisitar(20));
console.log(javisitei(20));