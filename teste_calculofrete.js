// teste_calculofrete.js no github copilot
//Crie testes automatizados utilizando Jest para a função calculateShipping, cobrindo pelo menos três cenários diferentes.

const calculateShipping = require('./calculo_frete');

describe('calculateShipping', () => {
  test('retorna o custo base com peso e distância zero', () => {
    expect(calculateShipping(0, 0)).toBe(15);
  });

  test('aplica corretamente o custo por quilograma', () => {
    expect(calculateShipping(5, 0)).toBe(30);
  });

  test('aplica corretamente o custo por quilômetro', () => {
    expect(calculateShipping(0, 100)).toBe(23);
  });

  test('soma corretamente peso e distância em um cenário combinado', () => {
    expect(calculateShipping(2, 50)).toBe(25);
  });
});