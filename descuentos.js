/* const precioO = 100;
const descuento = 15;

const PorcentajePrecioD = 100 - descuento;
const precioD = (precioO * PorcentajePrecioD) / 100;
 */

/* console.log({
    precioO,
    descuento,
    PorcentajePrecioD,
    precioD
}) */

function descu (precioN , descuento){
    const PorcentajePrecioD = 100 - descuento;
    const precioD = (precioN * PorcentajePrecioD) / 100;

    return precioD;
}

function preciodescuento(){
    const pre = document.getElementById("precio")
    const precioV = pre.value;

    const des = document.getElementById("descuento")
    const descuentoV = des.value;

    const precioConDescuento = descu(precioV, descuentoV);

    const precioresult = document.getElementById("precioR");
    precioresult.innerText = "El precio con descuento es $" + precioConDescuento; 
}