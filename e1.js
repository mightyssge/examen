
let numeroTurno = 1
let casillaAnt = (0, 0)


function devolverCasilla(i, j) {
    return document.getElementById(i + "_" + j)
}

function casillaOnClic(i, j) {
    console.log("Hizo Click en", i, j);

    const casilla = devolverCasilla(i, j);

    let idCasilla = i + "_" + j;

    if (numeroTurno == 1) {

        casillaAnt.innerHTML = "";
        casilla.innerHTML = "X";
        casillaAnt = casilla
        numeroTurno = 2;


    } else {


        casillaAnt.innerHTML = "";
        casilla.innerHTML = "X";
        casillaAnt = casilla
        numeroTurno = 1;


    }


}

