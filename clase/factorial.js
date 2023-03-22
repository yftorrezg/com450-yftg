//realizar el factorial con 5 pruebas de testeo
// 1. 1! = 1
// 2. 2! = 2
// 3. 3! = 6
// 4. 4! = 24
// 5. 5! = 120

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

module.exports = factorial;

// Path: factorial.test.js