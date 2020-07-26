/**
 *  declarar duas funções:
 * a primeira para calcular o perimetro de um círculo
 * a segunda para calcular a área de um círculo */

var pi = 3.14;

function perimetro(raio){
    return 2 * pi * raio;
}

function area(raio){
    return pi * (raio*raio);
}

console.log(perimetro(5));
console.log(area(10));