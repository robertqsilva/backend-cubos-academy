const filaDeDentro = ["Jose", "Maria"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];


while (filaDeDentro.length < 5) {
    filaDeDentro.push(filaDeFora[0]);
    filaDeFora.shift();
}


console.log(filaDeDentro);
console.log(filaDeFora);
