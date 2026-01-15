// exercicio 1
// let compra;
// function verificaDesconto(compra){   
//     if (compra >= 100){
//         let desconto = compra * 0.1;
//         console.log("Voce tem direito a desconto no valor de R$ "+desconto);
//     }else{
//         console.log("Nenhum desconto aplicado.")
//     }
// }

// verificaDesconto(120);

// ============================================================================

// exercicio 2

// let produto = 5;

// function verificaEstoque(){
//  if(produto > 0){
//     return console.log("Produto Disponivel.");
//  }else {
//     return console.log("Produto indisponível.")
//  }
// }

// verificaEstoque();

// =================================================================

// exercicio 3
// let pontos = 0;

// function categoriaCliente(pontos){  
//     if (pontos >= 85){
//         return console.log("Clinte Premium.")
//     }else if (pontos <= 84 && pontos >= 50){
//         return console.log("Cliente Regular.")
//     }else{
//         return console.log("Cliente Comum.")
//     }
// }

// categoriaCliente(45);

// =================================================================

// exercicio 4

// let meta;
// function desempenhoIndividualDeVendas(meta){
//     if(meta == 100){
//         return console.log("Excelente Desempenho");
//     }else if(meta <= 99 && meta >= 91){
//         return console.log("Muito Bom Desempenho");
//     }else if (meta <= 89 && meta >= 80){
//         return console.log( "Bom Deempenho");
//     }else if (meta <= 79 && meta >= 61){
//         return console.log("Bom Desempenho")
//     }else if (meta <= 60){
//         return console.log("Desempenho Insatisfatorio")
//     }
// }

// desempenhoIndividualDeVendas(55);

// =================================================================

// exercicio 5

// function verificarVelocidade(velocidade){
//     let veloc = velocidade <= 80 ? true : false;
//     console.log(veloc)
// }   

// verificarVelocidade(95);

// =================================================================

// exercicio 6

// function mensagemSemaforo(cor){
//    let sinal = cor == "vermelho" ? "pare" : cor == "amarelo" ? "atenção" : cor == "verde" ? "siga" : "cor inválida";
//    console.log(sinal);
// }

// mensagemSemaforo("verde");

// =================================================================

// exercicio 7
// function coresDoSemaforo(cor){
//     switch (cor){
//         case "vermelho":
//             console.log("Pare");
//         break;

//         case "amarelo":
//             console.log("Atençáo");
//         break;

//         case "verde":
//             console.log("Siga");
//         break;

//         default:
//             console.log("Opçáo Inválida.");
//     }
// }

// coresDoSemaforo("amarelo");

// =================================================================

// Exercicio 8

// function verificaPlaca(digito){
//     switch (digito){
//         case 9:
//             console.log("Náo rodar SEGUNDA-FEIRA.");
//         break;

//         case 7:
//             console.log("Náo rodar TERÇA-FEIRA.");
//         break;

//         case 5:
//             console.log("Náo rodar QUARTA-FEIRA.");
//         break;

//         case 3:
//             console.log("Náo rodar QUINTA-FEIRA.");
//         break;

//         case 1:
//             console.log("Náo rodar SEXTA-FEIRA.");
//         break;

//         default:
//             console.log("Opçáo Inválida.");
//     }
// }

// verificaPlaca(7);