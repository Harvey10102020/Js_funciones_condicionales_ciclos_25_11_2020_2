//OPERADORES CON XOR

let a = true;
let b = false;

if (a = (a ^= b)) {
    console.log(true);

} else {
    console.log(false);
}

let num = 50;

if (num &= "") {
    console.log(true);

} else {
    console.log(false);
}



if (a | b) {
    console.log(true);

} else {
    console.log(false);
}


function sumif(promedio, medida, incremento) {

    let validateA = medida + incremento;
    let validateB = medida - incremento;


    if ((validateA > promedio) || (validateB < promedio)) {

        return "Diferente al promedio";
    } else {


        if ((validateA &= promedio) || (validateB &= promedio)) {

            return "Igual al promedio";

        }


    }

}

console.log("El resultado de la función sumif(200, 200, 2) es: " + sumif(200, 200, 2)); //Variamos dos a la medida para que sea diferente al promedio

console.log("El resultado de la función sumif(200, 200, 0) es:" + sumif(200, 200, 0)); //no hacemos ningún incremento para que sea igual al promedio

function comprarproducto(opcion) {
    let plata = 1500;
    let pan = 1000;
    let salchichon = 500;
    let vueltos;

    switch (opcion) {

        case "Pagar Pan":
            vueltos = plata - pan;
            break;

        case "Pagar Salchichon":
            vueltos = plata - salchichon;
            break;

        case "Pagar Todo":
            vueltos = plata - pan - salchichon;
            break;
        default:
            break;


    }

    return "Sus vueltos son:" + vueltos;

}


console.log(comprarproducto("Pagar Todo"));

// //Json para almacenar datos

// let lista_informacionA = {};
// let lista_informacionB = [];
// let nombre = prompt("ingrese su nombre");
// lista_informacionA.NOMBRE = nombre;
// lista_informacionB["NOMBRE"] = nombre;

// let apellido = prompt("ingrese su apellido");
// lista_informacionA.APELLIDO = apellido;
// lista_informacionB["APELLIDO"] = apellido;

// console.log(lista_informacionA);
// console.log(lista_informacionB);