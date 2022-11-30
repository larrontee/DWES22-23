const $form = document.getElementById("formulario");
const $dni = document.getElementById('dni');
const $nombre = document.getElementById('nombre');
const $apellido = document.getElementById('apellido');
const $telefono = document.getElementById('telefono');
const $comentario = document.getElementById('comentario');
const $hora = document.getElementById('hora');
const $enviar = document.getElementById("enviar");

const validacionDni = /^\d{2}.\d{3}.\d{3}-[A-Z]$/;
const validacionNombre = /^[a-zA-Z]+$|[a-zA-Z]+\s[a-zA-Z]+$/;
const validacionApellido = /^[a-zA-Z]+$|[a-zA-Z]+\s[a-zA-Z]+$/;
const validacionTelefono = /^\+\d{2}\s\d{9}$/;
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
    if (!validacionApellido.test(x)) {
        alert("falla el apellido");
        return false;
    }
    return true
}
function vTelefono(x) {
    if (!validacionTelefono.test(x)) {
        alert("falla el telefono");
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


