const salariosCol = colombia.map(
    function(person){
        return person.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA-salaryB;
    }
);

function esPar(number){
    return (number % 2 === 0);
}

function calcularMediaArimetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;

}



function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    
    if(esPar(lista.length)){
        const personMitad1 = lista[mitad - 1];
        const personMitad2 = lista[mitad];
        const mediana = calcularMediaArimetica(personMitad1, personMitad2);
        return mediana;
    }else{
        const personMitad = lista[mitad];
        return personMitad
    }
}




const medianaGeneralCol = medianaSalarios(salariosColSorted);

console.log(
    medianaSalarios(salariosColSorted)
);