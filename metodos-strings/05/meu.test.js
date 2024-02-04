const ocultarNumeroCartao = require('./index.js');

describe('Testes da função ocultarNumeroCartao', () => {
    test('Ocultar número de cartão válido', () => {
        const numeroCartao = '141634444444441701';
        expect(ocultarNumeroCartao(numeroCartao)).toBe('1416**********1701');
    });

    test('Retornar erro para número de cartão inválido', () => {
        const numeroCartao = '123';
        expect(ocultarNumeroCartao(numeroCartao)).toBe('Número de cartão inválido! O número deve conter pelo menos 9 dígitos.');
    });

    test('Retornar erro para número de cartão com caracteres não numéricos', () => {
        const numeroCartao = 'ABCD1234567890';
        expect(ocultarNumeroCartao(numeroCartao)).toBe('Número de cartão inválido! O número deve conter apenas dígitos numéricos.');
    });
});