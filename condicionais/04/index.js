const ladoA = 4;
const ladoB = 8;

if (ladoA === ladoB && ladoA >= 0 && ladoA <= 6) {

    if (ladoA === 0) {
        console.log("É uma bucha de Branco");

    } else if (ladoA === 1) {
        console.log("É uma bucha de Às");

    } else if (ladoA === 2) {
        console.log("É uma bucha de Duque");

    } else if (ladoA === 3) {
        console.log("É uma bucha de Terno");

    } else if (ladoA === 4) {
        console.log("É uma bucha de Qudra");

    } else if (ladoA === 5) {
        console.log("É uma bucha de Quina");

    } else if (ladoA === 6) {
        console.log("É uma bucha de Sena");
    }

} else if (ladoA === ladoB) {
    console.log("Não é uma bucha valida");

} else if (ladoA >= 0 && ladoA <= 6 && ladoB >= 0 && ladoB <= 6) {
    console.log("Não é uma bucha");

} else {
    console.log("Não é um peça valida");
}