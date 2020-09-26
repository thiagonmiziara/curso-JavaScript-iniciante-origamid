var pessoa = {
    nome: "Thiago",
    idade: 33,
}

console.log(pessoa);

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.PI);
console.log(Math.random());

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84e',

}
menu.backgroundColor = '#000';
menu.color = ' blue';
menu.esconder = function() {
    console.log("Escondi");
}
var bg = menu.backgroundColor;


var height = 120;
var menu1 = {
    width: 800,
    height: 50,
    metadeHeigth() {
        return this.height / 2;
    },

}
console.log(menu1.metadeHeigth());
menu1.hasOwnProperty('color')