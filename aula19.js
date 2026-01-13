function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n + factorial(n - 1);
  }
}

let valorFatorial = factorial(5);
// let valorFatorial = factorial(1543);
console.log(valorFatorial);

// Árvore de Chamadas

// factorial(5)
// |
// +--factorial(4)
//        |
//        +--factorial(3)
//               |
//               +--factorial(2)
//                      |
//                      +--factorial(1)
//                             |
//                             +--factorial(0)
