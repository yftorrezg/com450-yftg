//realizar el factorial con 5 pruebas de testeo
// 1. 1! = 1
// 2. 2! = 2
// 3. 3! = 6
// 4. 4! = 24
// 5. 5! = 120


const factorial = require('./factorial');

test('1! = 1', () => {
  expect(factorial(1)).toBe(1);
}

test('2! = 2', () => {
  expect(factorial(2)).toBe(2);
}

test('3! = 6', () => {
  expect(factorial(3)).toBe(6);
}

test('4! = 24', () => {
  expect(factorial(4)).toBe(24);
}

test('5! = 120', () => {
  expect(factorial(5)).toBe(120);
}

// Path: factorial.js
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

module.exports = factorial;

// Path: factorial.test.js