const edades1 = ([2, 4, 6, 8, 10]);
const edades2 = [2,
    4,
    6,
    8,
    10,
    12];

const mitad1 = parseInt( edades1.length / 2);

const mitad2 = edades2.length / 2;

function espar(numero){
    if(numero % 2 === 0){
        return true
    }else{
        return false;
    }
}

let mediana;

if (espar(edades1.length)){
    const element1 = edades1[mitad1];
    const element2 = edades1[mitad1 + 1];

    
        }
        else{
            mediana = edades1[mitad1];
        }
