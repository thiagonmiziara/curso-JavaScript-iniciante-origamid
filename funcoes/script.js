// crie uma função para verificar se um falor é truthy

function verificar(dado) {
    return !!dado;
}
console.log(verificar(20))

// Crie uma função  matemática que retorne o preimetro de um quadrado

function perimetroQuadrado(lado) {
    return `O perimetro quadrado é ${lado * 4}`;
}
console.log(perimetroQuadrado(5));

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
        return `${par} é par!`
    } else {
        return `${par} é impar!`
    }
}
console.log(parOuImpar(3));

// crie uma função que retorne o tipo de dado do argumento passado nela

function tipoDeDado(dado) {
    return typeof(dado);
}
console.log(tipoDeDado("dfsdfs"));


// crie um evento que quando scroll apareca seu nome completo /
addEventListener('scroll', function() {
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