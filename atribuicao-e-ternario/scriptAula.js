let numero = 20;
let numero2 = 10;

numero += 10; // numero = numero +10;
console.log(numero)

numero *= numero2;
console.log(numero);

let idade = 33;
let naoPossuiDiabetes = true;
let podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : "Não pode beber" //operador ternário

console.log(podeBeber);


let possuiFaculdade = true;
if (possuiFaculdade)
    console.log("Possui faculdade!");