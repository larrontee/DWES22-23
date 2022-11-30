const resultado = document.getElementById("resultado");

document.getElementById("boton").addEventListener("click", inicio);


function inicio() {
    const texto = document.getElementById("texto").value;
    let palabras = texto.split(" ");
    let palabrasSinEspacio = [];
    let contador = 1;
    let palindroma1 = "";
    let palindroma2 = "";
    let longitudPalabras = [];


    console.log(palabras);
    console.log(palabrasSinEspacio);
    resultado.innerHTML += "Hay " + palabras.length + "palabras.<br/>";
    resultado.innerHTML += "Primera palabra " + palabras[0] + "<br/>";
    resultado.innerHTML += "Ultima palabra " + palabras[palabras.length - 1] + "<br/>";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == " ") {

        } else {
            palabrasSinEspacio.push(texto[i].toLowerCase());
        }

    }
    console.log(palabrasSinEspacio);
    for (let i = 0; i < palabrasSinEspacio.length; i++) {

        palindroma1 += palabrasSinEspacio[i];
        palindroma2 += palabrasSinEspacio[palabrasSinEspacio.length - contador];

        contador++;
    }

    console.log("1" + palindroma1);
    console.log(palindroma2);

    if (palindroma1 == palindroma2) {
        resultado.innerHTML += "Es una palabra palíndorma" + "<br/>"
    } else {
        resultado.innerHTML += ""
    }



}
