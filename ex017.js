/**
 * criei uma função soma para depois usá-la dentro da função 
 * chamada de triploDaSoma
 */

function soma(num1, num2) {
    return num1 + num2;
}

function triploDaSoma(num3, num4){
    var resultadoDaSoma = soma(num3, num4);
    return resultadoDaSoma * 3;
}

console.log(triploDaSoma(3,3));