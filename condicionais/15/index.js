const primeiroNome = "Mario";
const sobrenome = "silva";
const apelido = "";

if (apelido) {
    console.log(apelido);

} else if (sobrenome && primeiroNome) {
    console.log(primeiroNome + " " + sobrenome);

} else if (primeiroNome) {
    console.log(primeiroNome);

} else {
    console.log('Preencha o campo');
}
