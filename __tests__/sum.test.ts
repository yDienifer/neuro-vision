function sum(a: number, b: number): number {
  return a + b;
}

test('soma 1 + 2 para igualar a 3', () => {
  expect(sum(1, 2)).toBe(3);
});
