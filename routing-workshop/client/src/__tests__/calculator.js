import { calculator } from "../utils/calculator";

test('Sum two positive numbers', () => {
    const a = 5;
    const b = 6;
    const exprectedResult = 11;

    const actualResult = calculator.sum(a, b);

    expect(actualResult).toBe(exprectedResult);
});

test('Add undefined to a positive number', () => {
    expect(calculator.sum(1)).toBe(NaN);
});