const $form = document.getElementById("formulario");
const $dni = document.getElementById('dni');
const $nombre = document.getElementById("nombre");
const $apellido = document.getElementById("apellido");
const $fecha = document.getElementById("fecha");
const $email = document.getElementById("email");
const $web = document.getElementById("web");
const $password = document.getElementById("pass");
const $enviar = document.getElementById("enviar");

const validacionDni = /^\d{2}.\d{3}.\d{3}-[A-Z]$/;
const validacionNombre = /^[a-zA-Z]+$|[a-zA-Z]+\s[a-zA-Z]+$/;
const validacionApellido = /^[a-zA-Z]+$|[a-zA-Z]+\s[a-zA-Z]+$/;
const validacionEmail = /^\w{6}@\w{5}.[a-z]{3}$/;
const validacionWeb = /\w{4}.\w{3}$/;
const validacionFecha = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;


function handleSubmit(e) {
    e.preventDefault();
    const dni = $dni.value;
    const nombre = $nombre.value;
    const apellido = $apellido.value;
    const fechaMal = $fecha.value;
    console.log(fechaMal);
    const datosFecha = fechaMal.split('-');
    const fecha=datosFecha[2]+'/'+datosFecha[1]+'/'+datosFecha[0];
    console.log(fecha);
    const email = $email.value;
    const web = $web.value;
    const password= $password.value;
    if (vDni(dni) && vNombre(nombre) && vApellido(apellido) && vFecha(fecha) && vEmail(email) && vWeb(web) && vPass(password)) {
        var registro = {
            DNI: dni,
            Nombre: nombre,
            Apellidos: apellido,
            "Fecha nacimiento": fecha,
            Email: email,
            Web: web,
            Password: password
        };
        var usu = JSON.stringify(registro);
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

function vPass(x) {
    if (x.length >=8 && x.length <=10) {
        return true
    }
    alert("falla el password");
    return false;
}
function vNombre(x) {
    if (!validacionNombre.test(x)) {
        alert("falla el nombre");
        return false;
    }
    return true;
}
function vApellido(x) {
    if (!validacionApellido.test(x)) {
        alert("falla el apellido");
        return false;
    }
    return true;
}
function vEmail(x) {
    if (!validacionEmail.test(x)) {
        alert("falla el email");
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
function vWeb(x) {
    let url = x;
    let raiz = url.substring(0, 11);
    console.log(raiz);
    let dominio = url.substring(11,100);
    let contador = 0;

    if (raiz == "http://www.") {
        if (validacionWeb.test(dominio)) {
            return true;
        }
    }
    alert("falla el web");
    return false;
}

$form.addEventListener("submit", handleSubmit);
