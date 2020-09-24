var nome = 'Thiago';
var idade = 33;
var time = null;
var simbolo = Symbol();
console.log(typeof simbolo);

var nome = 'Thiago';
var sobrenome = 'Miziara';
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

var gols = 1000;
var frase = "Romário fez " + gols + " gols";
console.log(typeof frase);

var ano = '2020 ';
var mes = 08;
console.log(ano + mes);

var frase1 = "Esse é o \"melhor\" jogo";
console.log(frase1);

var gols1 = 1000;
var frase11 = "Romário fez " + gols + " gols";
var frase2 = `Romário fez ${gols} gols`;
console.log(frase2);