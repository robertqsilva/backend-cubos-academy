let minuto = 0;
let segundos = 0;
let intervaloId;

function iniciarConometro() {
  intervaloId = setInterval(() => {
    segundos === 59 ? ((segundos = 0), minuto++) : segundos++;
  }, 1000);
}

function pausarConometro() {
  clearInterval(intervaloId);
}

function continuarConometro() {
  iniciarConometro();
}
function zerarConometro() {
  minuto = 0;
  segundos = 0;
}

function situaçãoDoConometro() {
  const minutosDigitos = minuto.toString().padStart(2, 0);
  const segundosDigitos = segundos.toString().padStart(2, 0);

  return `Tempo atual do cronômetro: ${minutosDigitos} minutos e ${segundosDigitos} segundos`;
}

module.exports = {
  iniciarConometro,
  situaçãoDoConometro,
  pausarConometro,
  continuarConometro,
  zerarConometro,
};
