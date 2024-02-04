const diaDaSemana = -1;


if (diaDaSemana >= 1 && diaDaSemana <= 7) {

    if (diaDaSemana === 1) {
        console.log('Segunda-feira');

    } else if (diaDaSemana === 2) {
        console.log('Terça-feira');

    } else if (diaDaSemana === 3) {
        console.log('Quarta-feira');

    } else if (diaDaSemana === 4) {
        console.log('Quinta-feira');

    } else if (diaDaSemana === 5) {
        console.log('Sexta-feira');

    } else if (diaDaSemana === 6) {
        console.log('Sabado');

    } else if (diaDaSemana === 7) {
        console.log('Domingo');
    }
} else {
    console.log('O dia da semana informado não é válido.');
}