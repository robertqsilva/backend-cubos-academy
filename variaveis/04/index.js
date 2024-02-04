const capitalInicial = 1000;
const taxa = 12.5;
const tempo = 5;

const montante = capitalInicial * (1 + (taxa / 100)) ** tempo;
console.log(`O montante será de ${montante}`)