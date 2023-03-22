// factorial
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// combinatoria
function combinatoria(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

// permutacion
function permutacion(n, k) {
  return factorial(n) / factorial(n - k);
}