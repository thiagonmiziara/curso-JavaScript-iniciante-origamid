let brasilCampeao = ['1959', '1962', '1970', '1994', '2002'];
//console.log(anos);
for (let i = 0; i < brasilCampeao.length; i++) {
    console.log(`O Brasil ganhou a copa de ${brasilCampeao[i]} `)
}

let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
    if (frutas[i] === 'Pera') {
        break;

    }
}

let ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta)