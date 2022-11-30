window.onload = juego();
function juego() {
    let num = Math.floor(Math.random() * (50 - 1) + 1);
    console.log(num);
    let numeroUsu = parseInt(prompt("introduce un número 1-50", 10));
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
    let valido = false;
    let intentos = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeroUsu == numeros[i]) {
            valido = true;
        }
    }
    if (!valido) {
        alert("no es un numero");
    }
    if (numeroUsu == num) {
        alert("HAS GANADO, ERES UN CRACK!!!");
    }
    intentos++;
    while (numeroUsu != num && intentos <= 4) {
        valido = false;
        alert("no es ese numero");
        numeroUsu = parseInt(prompt("introduce un número 1-50"));

        for (let i = 0; i < numeros.length; i++) {
            if (numeroUsu == numeros[i]) {
                valido = true;
            }
        }
        if (!valido) {
            alert("no es un numero ");
        }

        if (numeroUsu < num) {
            alert("el numero es menor que el correcto");
        }
        if (numeroUsu > num) {
            alert("el numero es mayor que el correcto");
        }
        intentos++;
        if (numeroUsu == num) {
            alert("HAS GANADO, ERES UN CRACK!!!");
        }
        if (intentos == 5) {
            alert("HAS PERDIDO, OTRA VEZ SERÁ!!!");
        }
    }

    let otra = confirm("¿quieres jugar de nuevo?");
    if (otra) {
        juego();
    }
}
