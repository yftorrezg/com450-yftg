// 5 pruebas Para un factorial 

const assert = require("assert");

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

describe("Factorial", function () {
  // factorial de 0
  it("Deberia devolver 1 para factorial de 0", function () {
    assert.equal(factorial(0), 1);
  });
  // factorial de 1
  it("Deberia devolver 1 para factorial de 1", function () {
    assert.equal(factorial(1), 1);
  });
  // factorial de 2
  it("Deberia devolver 2 para factorial de 2", function () {
    assert.equal(factorial(2), 2);
  });
  // factorial de 3
  it("Deberia devolver 6 para factorial de 3", function () {
    assert.equal(factorial(3), 6);
  });
  // factorial de 4
  it("Deberia devolver 24 para factorial de 4", function () {
    assert.equal(factorial(4), 24);
  });
  // factorial de 5
  it("Deberia devolver 120 para factorial de 5", function () {
    assert.equal(factorial(5), 120);
  });
});

// 5 pruebas Para una COMBINATORIA
function combinatoria(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

describe("Combinatoria", function () {
  // combinatoria de 0
  it("Deberia devolver 1 para combinatoria de 0,0", function () {
    assert.equal(combinatoria(0, 0), 1);
  });
  // combinatoria de 1
  it("Deberia devolver 1 para combinatoria de 1,1", function () {
    assert.equal(combinatoria(1, 1), 1);
  });
  // combinatoria de 2
  it("Deberia devolver 1 para combinatoria de 2,2", function () {
    assert.equal(combinatoria(2, 2), 1);
  });
  // combinatoria de 3
  it("Deberia devolver 21 para combinatoria de 7,2", function () {
    assert.equal(combinatoria(7, 2), 21);
  });
  // combinatoria de 4
  it("Deberia devolver 15 para combinatoria de 4", function () {
    assert.equal(combinatoria(6, 4), 15);
  });
  // combinatoria de 5
  it("Deberia devolver 5 para combinatoria de 5", function () {
    assert.equal(combinatoria(5, 1), 5);
  });
});

// 5 pruebas Para una PERMUTACION
function permutacion(n, k) {
  return factorial(n) / factorial(n - k);
}
 
describe("Permutacion", function () {
  // permutacion de 0
  it("Deberia devolver 1 para permutacion de 0", function () {
    assert.equal(permutacion(0, 0), 1);
  });
  // permutacion de 1
  it("Deberia devolver 1 para permutacion de 1", function () {
    assert.equal(permutacion(1, 1), 1);
  });
  // permutacion de 2
  it("Deberia devolver 2 para permutacion de 2", function () {
    assert.equal(permutacion(2, 2), 2);
  });
  // permutacion de 3
  it("Deberia devolver 6 para permutacion de 3", function () {
    assert.equal(permutacion(3, 3), 6);
  });
  // permutacion de 4
  it("Deberia devolver 24 para permutacion de 4", function () {
    assert.equal(permutacion(4, 4), 24);
  });
  // permutacion de 5
  it("Deberia devolver 120 para permutacion de 5", function () {
    assert.equal(permutacion(5, 5), 120);
  });
});


