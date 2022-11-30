const $form = document.getElementById("formulario");
const $dni = document.getElementById('dni');
const $nombre = document.getElementById("nombre");
const $fecha = document.getElementById("fecha");
const $hora = document.getElementById("hora");
const $medio = document.getElementById("medio");
const $movil = document.getElementById("movil");
const $email = document.getElementById("email");

const validacionDni = /^\d{2}.\d{3}.\d{3}[A-Z]$/;
const validacionNombre = /^[a-zA-Z]+\s[a-zA-Z]+$|[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+$|[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+$/;
const validacionEmail = /^\w{6}@\w{5}.[a-z]{3}$/;
const validacionWeb = /\w{4}.\w{3}$/;
const validacionFecha = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
const validacionHora = /^([0-1][0-9])|(2[0-4]:[0-5][0-9]|60)$/;




$form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    const fechaMal = $fecha.value;
    console.log(fechaMal);
    const datosFecha = fechaMal.split('-');
    const fecha = datosFecha[2] + '/' + datosFecha[1] + '/' + datosFecha[0];
    console.log(fecha);

    const dni = $dni.value;
    const nombre = $nombre.value;
    const hora = $hora.value;
    const medio = $medio.value;
    const movil = $movil.value;
    const email = $email.value;

    if (vDni(dni) && vNombre(nombre) && vHora(hora) && vFecha(fecha)) {
        var registro = {
            DNI: dni,
            NOMBRE: nombre,
            HORA: hora,
            FECHA: fecha
        };
        let usu = JSON.stringify(registro);
        localStorage.setItem(usu);
        console.log(registro);
        console.log(usu);
        return true;
    }
}



function vDni(x) {
    if (!validacionDni.test(x)) {
        alert("falla el dni");
        return false;
    }
    return true
}
function vNombre(x) {
    if (!validacionNombre.test(x)) {
        alert("falla el nombre");
        return false;
    }
    return true;
}
function vFecha(x) {
    if (!validacionFecha.test(x)) {
        alert("falla el fecha");
        return false;
    }
    return true;
}
function vHora(x) {
    if (!validacionHora.test(x)) {
        alert("falla el hora");
        return false;
    }
    return true;
}

function cargarDatos() {
    $dni.value = localStorage.getItem(usu["DNI"]);
    // $nombre = document.getElementById("nombre");
    // $fecha = document.getElementById("fecha");
    // $hora
}