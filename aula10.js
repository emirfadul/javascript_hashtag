//Exemplo produtos

// let produtos = ["Camiseta", "Calça", "Boné", "Meias"]; //0 , 1 , 2 , 3 - indices

// for (let index = 0; index <= 3; index++) {
//   console.log("Produto " + (index + 1) + ": " + produtos[index]);
// }

// Loop for sem especificar todos os argumentos
// let index = 0;
// let produtos = ["Camiseta", "Calça", "Boné", "Meias"]; //0 , 1 , 2 , 3 - indices

// for (; index <= 3; index++) {
//   console.log("Produto " + (index + 1) + ": " + produtos[index]);
// }

let produtos = ["Camiseta", "Calça", "Boné", "Meias"]; //0 , 1 , 2 , 3 - indices

for (let index = 0; ; index++) {
  if (index >= produtos.length) {
    break;
  }
  console.log("Produto " + (index + 1) + ": " + produtos[index]);
}

// loopingInfinito
// for (;;) {
//   console.log("Loop Infinito");
// }

// for (let index = 0; ; index++) {
//   console.log("Loop Infinito");
// }

// console.log("Sai do loop infinito");



// for (let i = 1; i <= 3; i++ ) {
//   console.log("Loop Infinito");
//   console.log(i);
// }

// console.log("Sai do loop infinito");
