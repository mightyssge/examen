
let numeroTurno = 1

let casillaAnt = (0, 0)
let casillaAntT = (0, 0)
let casillaAntB = (0, 0)
let casillaAntR = (0, 0)
let casillaAntL = (0, 0)


function devolverCasilla(i, j) {
    return document.getElementById(i + "_" + j)
}

function devolverCasillaT(i, j) {
    if (i == 0 || i == 8) {
        return document.getElementById(i + "_" + j)
    }
    else {
        return document.getElementById((i - 1) + "_" + j)
    }

}
function devolverCasillaB(i, j) {
    if (i == 7 || i == 15) {
        return document.getElementById(i + "_" + j)
    }
    else {
        return document.getElementById((i + 1) + "_" + j)
    }

}
function devolverCasillaR(i, j) {
    if (j == 7) {
        return document.getElementById(i + "_" + j)
    }
    else {
        return document.getElementById(i + "_" + (j + 1))
    }

}
function devolverCasillaL(i, j) {
    if (j == 0) {
        return document.getElementById(i + "_" + j)
    }
    else {
        return document.getElementById(i + "_" + (j - 1))
    }

}


function casillaOnClic(i, j) {
    console.log("Hizo Click en", i, j);
    console.log("Hizo Click en", 15 - i, 7 - j);
    let casilla = devolverCasilla(i, j);

    let casillaT = devolverCasillaT(i, j);
    let casillaB = devolverCasillaB(i, j);
    let casillaR = devolverCasillaR(i, j);
    let casillaL = devolverCasillaL(i, j);

    let idCasilla = i + "_" + j;

    if (numeroTurno == 1) {

        if (document.getElementById("status") != null) {
            var idPost = document.getElementById("status").innerHTML;
        }

        casillaAnt.innerHTML = "";
        casillaAntT.innerHTML = "";
        casillaAntB.innerHTML = "";
        casillaAntR.innerHTML = "";
        casillaAntL.innerHTML = "";


        casilla.innerHTML = "X";
        casillaT.innerHTML = "X";
        casillaB.innerHTML = "X";
        casillaR.innerHTML = "X";
        casillaL.innerHTML = "X";


        casillaAnt = casilla
        casillaAntT = casillaT
        casillaAntB = casillaB
        casillaAntR = casillaR
        casillaAntL = casillaL


        casilla = devolverCasilla(15 - i, 7 - j);
        casillaT = devolverCasillaT(15 - i, 7 - j);
        casillaB = devolverCasillaB(15 - i, 7 - j);
        casillaR = devolverCasillaR(15 - i, 7 - j);
        casillaL = devolverCasillaL(15 - i, 7 - j);

        casilla.innerHTML = "X";
        casillaT.innerHTML = "X";
        casillaB.innerHTML = "X";
        casillaR.innerHTML = "X";
        casillaL.innerHTML = "X";


        casillaAnt = casilla
        casillaAntT = casillaT
        casillaAntB = casillaB
        casillaAntR = casillaR
        casillaAntL = casillaL


        numeroTurno = 2;


    } else {


        casillaAnt.innerHTML = "";
        casillaAntT.innerHTML = "";
        casillaAntB.innerHTML = "";
        casillaAntR.innerHTML = "";
        casillaAntL.innerHTML = "";


        casilla.innerHTML = "X";
        casillaT.innerHTML = "X";
        casillaB.innerHTML = "X";
        casillaR.innerHTML = "X";
        casillaL.innerHTML = "X";


        casillaAnt = casilla
        casillaAntT = casillaT
        casillaAntB = casillaB
        casillaAntR = casillaR
        casillaAntL = casillaL

        casilla = devolverCasilla(15 - i, 7 - j);
        casillaT = devolverCasillaT(15 - i, 7 - j);
        casillaB = devolverCasillaB(15 - i, 7 - j);
        casillaR = devolverCasillaR(15 - i, 7 - j);
        casillaL = devolverCasillaL(15 - i, 7 - j);

        casilla.innerHTML = "X";
        casillaT.innerHTML = "X";
        casillaB.innerHTML = "X";
        casillaR.innerHTML = "X";
        casillaL.innerHTML = "X";


        casillaAnt = casilla
        casillaAntT = casillaT
        casillaAntB = casillaB
        casillaAntR = casillaR
        casillaAntL = casillaL

        numeroTurno = 1;


    }


}

