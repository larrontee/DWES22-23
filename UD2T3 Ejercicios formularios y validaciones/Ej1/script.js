const $form = document.getElementById("formulario");
const $dni = document.getElementById('dni');
const $nombre = document.getElementById('nombre');
const $apellido = document.getElementById('apellido');
const $telefono = document.getElementById('telefono');
const $comentario = document.getElementById('comentario');
const $hora = document.getElementById('hora');
const $enviar = document.getElementById("enviar");

const validacionDni = /^\d{8}[A-Z]$/;
const validacionNombre = /^[a-zA-Z]+$|[a-zA-Z]+\s[a-zA-Z]+$/;
const validacionApellido = /^[a-zA-Z]+$|[a-zA-Z]+\s[a-zA-Z]+$/;
const validacionTelefono = /^\+\d{2}\s\d{9}$/;
// const validacionComentario = /^([0-9]){8}[A-Z]/;
const validacionHora = /^(([0-1][0-9])|([2][0-4]))\:[0-5][0-9]$/;



function handleSubmit(e) {
    e.preventDefault();
    const dni = $dni.value
    const nombre = $nombre.value;
    const apellido = $apellido.value;
    const telefono = $telefono.value;
    const comentario = $comentario.value;
    const hora = $hora.value;
    if (vDni(dni) && vNombre(nombre) && vApellido(apellido) && vTelefono(telefono) && vHora(hora) && vComentario(comentario)) {
        var registro = { DNI: dni, Nombre: nombre, Apellido: apellido, Telefono: telefono, Comentario: comentario, Hora: hora };
        var usu = JSON.stringify(registro);
        console.log(registro)
        console.log(usu)
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
    return true
}
function vApellido(x) {
    alert("falla el apellido");
    if (!validacionApellido.test(x)) {
        return false;
    }
    return true
}
function vTelefono(x) {
    alert("falla el telefono");
    if (!validacionTelefono.test(x)) {
        return false;
    }
    return true
}
function vComentario(x) {
    if (comentario.length <= 250) {
        alert("falla el comentario");
        return false;
    }
    return true
}
function vHora(x) {
    if (!validacionHora.test(x)) {
        alert("falla la hora");
        return false;
    }
    return true
}
$form.addEventListener('submit', handleSubmit);


// const $form = document.getElementById("formulario");
// const $dni = document.getElementById("dni");
// const $nombre = document.getElementById("nombre");
// // const $fechaNacimiento = document.getElementById("fechaNacimiento");
// const $email = document.getElementById("email");
// const $webPersonal = document.getElementById("webpersonal");
// const $contraseña = document.getElementById("contraseña");

// function handleSubmit(e) {
//         e.preventDefault();
//         const dni = $dni.value;
//         const nombre = $nombre.value;
//         const fechaNacimiento = $fechaNacimiento.value;
//     const email = $email.value;
//     const webPersonal = $webPersonal.value;
//     const contraseña = $contraseña.value;
//     var es_validadio = new Boolean(true);

//     debugger
//     if (dni == false  isValidDNI(dni) == false) {
//         alert("Has introducido mal el dni, recuerda que el formato es (99.999.999-X)");
//         es_validadio = false;
//     }

//     if (nombre == false  isValidNombre(nombre) == false) {
//         alert("Has introducido mal el nombre, recuerda que el formato del nombre es Mínimo 1 nombre y 1 apellido, Máximo 2 nombre y 2 apellidos");
//         es_validadio = false;
//     }

//     if (fechaNacimiento == false  isValidFechaNacimiento(fechaNacimiento) == null) {
//         alert("Has introducido mal la fecha de nacimiento, recuerda que el formato de la fecha es el siguiente: dd/mm/yyyy");
//         es_validadio = false;
//     }

//     if (email == false  isValidEmail(email) == false) {
//         alert("Has introducido mal el email, recuerda que el formato del email es: xxxxxx@yyyyy.zzz");
//         es_validadio = false;
//     }
//     if (webPersonal == false  isValidWebPersonal(webPersonal) == false) {
//         alert("Has introducido mal el web personal, recuerda que el formato de la web personal es http://www.xxxx.yyy/%22");
//         es_validadio = false;
//     }

//     if (contraseña == false  isValidContraseña(contraseña) == false) {
//         alert("Has introducido mal el contraseña, recuerda que tiene que tener entre 8 y 10 carácteres");
//         es_validadio = false;
//     }

//     if (es_validadio) {
//         var newUser = { dni: dni, nombre: nombre, fechaDeNacimiento: fechaNacimiento, email: email, webPersonal: webPersonal, contraseña: contraseña };
//         console.log(newUser);
//         var usuarioRegistrado = JSON.stringify(newUser);
//         console.log(usuarioRegistrado);
//     }
// }

// function isValidContraseña(contraseña) {
//     const validacion = /^\w{8}$|^\w{10}$/;
//     return validacion.test(contraseña);
// }

// function isValidWebPersonal(webPersonal) {
//     const validacion = /^[htp]{4}:/ /\w{ 3}.\w{ 4}.\w{ 3}$/
//     return validacion.test(webPersonal);
// }

// function isValidEmail(email) {
//     const validacion = /^[a-zA-Z]{6}@[a-zA-Z]{5}.[a-zA-Z]{3}$/;
//     return validacion.test(email);
// } function isValidFechaNacimiento(fechaNacimiento) {
//     const validacion = /^[0-2][0-9]/[0 - 12] + /\d{4}$/;
//     return validacion.test(fechaNacimiento);
// }

// function isValidNombre(nombre) {
//     const validacion = /^[a-zA-Z]+\s[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+$/;
//     return validacion.test(nombre);
// }

// function isValidDNI(dni) {
//     const validacion = /^[0-9]{8}[A-Z]$/;
//     return validacion.test(dni);
// }

// $form.addEventListener('submit', handleSubmit);