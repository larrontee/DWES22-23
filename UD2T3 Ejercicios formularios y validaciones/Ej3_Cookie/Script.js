const $form = document.getElementById("formulario");
const $nombre = document.getElementById("nombre");
const $apellido = document.getElementById("apellido");
const $email = document.getElementById("email");
const $web = document.getElementById("web");
const $enviar = document.getElementById("enviar");

const validacionDni = /^\d{8}[A-Z]$/;
const validacionNombre = /^[a-zA-Z]+$|[a-zA-Z]+\s[a-zA-Z]+$/;
const validacionApellido = /^[a-zA-Z]+$|[a-zA-Z]+\s[a-zA-Z]+$/;
const validacionEmail = /^\w{6}@\w{5}.[a-z]{3}$/;
const validacionWeb = /\w{4}.\w{3}$/;

$form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    const nombre = $nombre.value;
    const apellido = $apellido.value;
    let usuario=nombre+" "+apellido;  
    const email = $email.value;
    set_cookie_correo(email);
    set_cookie_usuario(usuario);
    const web = $web.value;
    if (vNombre(nombre) && vApellido(apellido) && vEmail(email) && vWeb(web)) {
        var registro = {
            Nombre: nombre,
            Apellidos: apellido,
            Email: email,
            Web: web,
        };
        var usu = JSON.stringify(registro);
        console.log(registro);
        console.log(usu);
        return true;
    }
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




function set_cookie_correo(valor) {
    let nombre="email";
    let d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    let expiracion = "expires=" + d.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}
function set_cookie_usuario(valor) {
    let nombre="usuario";
    let d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    let expiracion = "expires=" + d.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}