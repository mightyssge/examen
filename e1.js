
let numeroTurno = 1



function devolverCasilla(i, j) {
    return document.getElementById(i + "_" + j)
}

function casillaOnClic(i, j) {
    console.log("Hizo Click en", i, j);

    casilla = devolverCasilla(i, j);
    let idCasilla = i + "_" + j;

    if (numeroTurno == 1) {
        numeroTurno = 2;
        casilla.innerHTML = "X";


    } else {
        location.reload();
        numeroTurno = 1;

        casilla.innerHTML = "X";


    }

    casilla.disabled = true;
}

