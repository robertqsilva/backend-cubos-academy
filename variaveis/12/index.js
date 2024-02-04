const montante = 90000;
const capitalInicial = 60000;
const meses = 24;

const formula = (montante / capitalInicial) ** (1 / meses) - 1;
let taxa = formula * 100;
taxa = taxa.toFixed(1);


console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxa}, pois após ${meses} meses você teve que pagar ${montante} reais`);