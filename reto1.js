num = parseInt(prompt("Ingrese el numero de creditos"));
let num2 = 1;
let numeros = [];
let numeros2 = [];
let n1 = 1;
let n2 = 1;
while (num2 <= num) {


    var notas = parseInt( prompt("ingrese un NOTA " + n1));
    numeros.push(notas);
    let creditos = parseInt( prompt("ingrese un CREDITO " + n2));
    numeros2.push(creditos);
    num2++, n1++, n2++;
}
