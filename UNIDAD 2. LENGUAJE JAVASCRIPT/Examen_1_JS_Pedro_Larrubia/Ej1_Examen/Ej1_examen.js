const $boton = document.getElementById("boton");
const $form = document.getElementById("formulario");
const ivaBebida = 0.21;
const iva = 0.10;
const resultado = document.getElementById("resultado");
let entrantecheck = false;
let bebidacheck = false;
let postrecheck = false;
let vipcheck = false;
$form.addEventListener("submit", cuenta);


function cuenta(e) {
    e.preventDefault();
    const $plato = document.getElementById("plato");
    const $entrante = document.getElementById("entrante");
    const $bebida = document.getElementById("bebida");
    const $postre = document.getElementById("postre");
    const $vip = document.getElementById("vip");

    let plato = parseInt($plato.value) + parseInt($plato.value) * iva;;
    let entrante = parseInt($entrante.value) + parseInt($entrante.value) * iva;
    let bebida = parseInt($bebida.value) + parseInt($bebida.value) * ivaBebida;
    let postre = parseInt($postre.value) + parseInt($postre.value) * iva;
    let vip = parseInt($vip.value);
    let cuenta = plato;

    if ($entrante.checked) {
        cuenta += entrante;
    }


    if ($bebida.checked) {
        cuenta += bebida;;
    }


    if ($postre.checked) {
        cuenta += postre;
    }
    if ($vip.checked) {
        cuenta -= cuenta * 0.05;
    }

    resultado.innerHTML = "El total de la cuente es: " + cuenta;

}