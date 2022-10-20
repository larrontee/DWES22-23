const $form = document.getElementById("formulario");
const $fecha = document.getElementById("fecha");
const $codCoci = document.getElementById('codCoci');
const $codDest = document.getElementById("codDest");
const $gramos = document.getElementById("gramos");
const $composicion = document.getElementById("composicion");
const $banco = document.getElementById("banco");
const $enviar = document.getElementById("enviar");

const validacionFecha = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
const validacioncodCoci = /^[A-Z]{2}(\W|[_])\d{4}$/;
const validacioncodCodDest = /^[A-Z]{2,3}_[a-z]+:\d{4}$/;
// const validacionComposicion = /\d{2}$/;
const validacionBanco = /\w{4}.\w{3}$/;


$form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    const fechaMal = $fecha.value;
    console.log(fechaMal);
    const datosFecha = fechaMal.split('-');
    const fecha = datosFecha[2] + '/' + datosFecha[1] + '/' + datosFecha[0];
    console.log(fecha);

    const codCoci = $codCoci.value;
    const codDest = $codDest.value;
    const gramos = $gramos.value;
    const composicion = $composicion.value;
    const banco = $banco.value;
    if (vCocniero(codCoci)&& vDestinatario(codDest)&& vGramos(gramos)&&vFecha(fecha)) {
        var registro = {
            fecha: fecha,
            codCoci: codCoci,
            codDest: codDest,
            gramos: gramos
        };
        var usu = JSON.stringify(registro);
        console.log(registro);
        console.log(usu);
        return true;
    }
}
function vFecha(x) {
    if (!validacionFecha.test(x)) {
        alert("falla el fecha");
        return false;
    }
    return true;
}
function vCocniero(x) {
    if (!validacioncodCoci.test(x)) {
        alert("falla el codCoci");
        return false;
    }
    return true
}


function vDestinatario(x) {
    if (!validacioncodCodDest.test(x)) {
        alert("falla el codDest");
        return false;
    }
    return true
}

function vGramos(x) {
    if (x>=100 && x<=5000) {
        return true
    }
    alert("falla el codDest");
    return false;
}


function vBanco(x) {
    let numCuenta = x;
    let dosletras=numCuenta.substring(0,2);
    let dosdigitos=numCuenta.substring(2,4);
    let guion=numCuenta.substring(4,5);
    let docedigitos=numCuenta.substring(5,18);
    let numeros = [0,1,2,3,4,5,6,7,8,9];
    let letters =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let suma=0;
    let pos1=letters.indexOf(dosletras[0]);
    let pos2=letters.indexOf(dosletras[1]);
    suma = pos1+pos2;
    if(suma!=dosdigitos && dosdigitos[0]!=0){
        return false;
    }
    if(guion!="-"){
        return false;
    }
    for (let i = 0; i < docedigitos.length; i++) {
        
    }

} 