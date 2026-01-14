// Árvore de Chamadas

// funcaoRecursiva(TEXTO)
// |
// +--funcaoRecursiva(EXTO)
//        |
//        +--funcaoRecursiva(XTO)
//               |
//               +--funcaoRecursiva(TO)
//                      |
//                      +--funcaoRecursiva(O)
//                              |
//                              +--funcaoRecursiva() - Parada

function recursividade(string) {
  if (string === "") {
    return 0;
  }
  return 1 + recursividade(string.substring(1)); // Chamada recursiva com a string menos o primeiro caracter
}

console.log(recursividade("Hashtag"));
console.log(recursividade("H"));


console.log(recursividade("emir"));
