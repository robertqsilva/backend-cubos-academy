const formatandoNUmero = require('./index.js');

describe('Testes da função formatandoNUmero', () => {
    test('Formatar número de celular com 10 dígitos', () => {
        const numeroCelular = '1198765432';
        expect(formatandoNUmero(numeroCelular)).toBe('11 9 9876-5432');
    });

    test('Formatar número de celular com 9 dígitos', () => {
        const numeroCelular = '998765432';
        expect(formatandoNUmero(numeroCelular)).toBe('9 9876-5432');
    });

    test('Formatar número de celular com 8 dígitos', () => {
        const numeroCelular = '98765432';
        expect(formatandoNUmero(numeroCelular)).toBe('9 9876-5432');
    });

    test('Retornar erro para número de celular inválido com caracteres não numéricos', () => {
        const numeroCelular = '9414y241';
        expect(formatandoNUmero(numeroCelular)).toBe('Número de celular inválido! O número deve conter apenas dígitos numéricos.');
    });

    test('Retornar erro para número de celular inválido com menos de 8 dígitos', () => {
        const numeroCelular = '123456'; // Número de celular com menos de 8 dígitos
        expect(formatandoNUmero(numeroCelular)).toBe('Número de celular inválido! O número deve conter pelo menos 8, 9 ou 12 dígitos.');
    });

    test('Retornar erro para número de celular inválido com mais de 12 dígitos', () => {
        const numeroCelular = '112233445566'; // Número de celular com mais de 12 dígitos
        expect(formatandoNUmero(numeroCelular)).toBe('Número de celular inválido! O número deve conter pelo menos 8, 9 ou 12 dígitos.');
    });
});
