
let numeroTurno = 1
let casillaAnt = (0, 0)


function devolverCasilla(i, j) {
    return document.getElementById(i + "_" + j)
}

function devolverCasillaT(i, j) {
    return document.getElementById((i - 1) + "_" + j)
}
function devolverCasillaB(i, j) {
    return document.getElementById((i + 1) + "_" + j)
}
function devolverCasillaR(i, j) {
    return document.getElementById(i + "_" + (j + 1))
}
function devolverCasillaL(i, j) {
    return document.getElementById(i + "_" + (j + 1))
}


function casillaOnClic(i, j) {
    console.log("Hizo Click en", i, j);

    const casilla = devolverCasilla(i, j);

    const casillaT = devolverCasilla(i, j);
    const casillaB = devolverCasilla(i, j);
    const casillaR = devolverCasilla(i, j);
    const casillaL = devolverCasilla(i, j);

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

