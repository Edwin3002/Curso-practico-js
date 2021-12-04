console.log("hola che!");

//Cuadrado
console.group("Cuadrados")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroC2 (lado){
    
    return lado * 4;
}
//console.log("El perimetro del cuadrado mide: " + perimietroC + " cm");

function areaCud (lado){
    
    return lado ** 2;
}
//Console.log("El area del cuadrado mide: " + areaC + " cm^2");
console.groupEnd();

//Triangulo
console.group("Triangulos")

function perimetroTri(l1, l2){

    return parseInt(l1 * 2) + l2;
}


const ladoT1 = 5;
const ladoT2 = 5;
const ladoT3 = 8;
/*console.log("Los lados del triangulo miden: "
        + ladoT1 + " cm, "
        + ladoT2 + " cm y "
        + ladoT3 + " cm.");
*/

function areaTri(base, altura){

    return (base * altura) / 2;
}



function altTri(l1, l2){

        return parseInt(Math.sqrt((l1 ** 2)-(l2 ** 2))  );
}
const alturaT = 3;
//console.log("La altura del triangulos mide: " + alturaT + " cm")

const perimietroT =  ladoT1 + ladoT2 + ladoT3;
//console.log("El perimetro del triangulo mide: " + perimietroT + " cm");

const areaT = (ladoT3 * alturaT) / 2;
//console.log("El area del triangulo mide: " + areaT + " cm^2")
console.groupEnd();

//Circulo
console.group("Circulos")
const radio = 10;
const pi = Math.PI;
const diametroC = radio * 2;

function diametroCirculo(radio1){

    return radio1* pi;
}

function areaCirculo(radio1){

    return ((radio1 ** 2) * pi);
}
//console.log("El perimetro del circulo mide: " + radio + " cm");

const perimetroC = diametroC * pi;
//console.log("El diametro del circulo mide: " + diametroC + " cm");

const areaCir = (radio ** 2) * pi;
//console.log("El perimetro del circulo mide: " + areaCir + " cm^2");

console.groupEnd();
//funciones cuadrado
function calcularPerCua(){
    const input = document.getElementById("inputC");
    const value = input.value;

    const perimetro = perimetroC2(value);
    alert(perimetro);
}

function calcularAreCua(){
    const input = document.getElementById("inputC");
    const value = input.value;

    const area = areaCud(value);
    alert(area);
}


//funciones triangulo
function calcularPerTri(){
    const input = document.getElementById("inputT1");
    const value = parseInt(input.value);

    
    const input2 = document.getElementById("inputT2");
    const value2 = parseInt(input2.value);

    const perimetrotria = perimetroTri(value, value2);
    alert(perimetrotria);
}

function calcularAreTri(){
    const valor1 = document.getElementById("inputT1");
    const v1 = parseInt(valor1.value);

    const valor2 = document.getElementById("inputT2");
    const v2 = parseInt(valor2.value);

    const area = areaTri(v1, v2);
    alert(area);
}

function calcularAltTri(){
    const valor1 = document.getElementById("inputT1")
    const v1 = parseInt(valor1.value);

    const valor2 = document.getElementById("inputT2");
    const v2 = parseInt(valor2.value);

    const altura = altTri(v1, v2);
    alert(altura);
}


//funciones circulo
function calcularPerCir(){
    const in1 = document.getElementById("inputC1");
    const va = in1.value;

    const perimetro = diametroCirculo(va);
    alert(perimetro);
}

function calcularAreCir(){
    const in2 = document.getElementById("inputC1");
    const va2 = in2.value;

    const area = areaCirculo(va2);
    alert(area);
}
