var dadosPessoais = {
    nome: "Thiago",
    sobrenome: "Nunes Miziara",
}

console.log(dadosPessoais.nome);

dadosPessoais.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
};
console.log(dadosPessoais.nomeCompleto());

var carro = {
    preco: 1000,
    portas: 4,
    marca: "Audi"
}

carro.preco = 3000;
console.log(carro);

var cachorro = {
    raca: "labrador",
    cor: "Preto",
    idade: 10 + " anos",
    latir(pessoa) {
        if (pessoa === 'homem') {
            return "Latir"
        } else {
            return "nada"
        }
    }
}
console.log(cachorro.latir('homem'));