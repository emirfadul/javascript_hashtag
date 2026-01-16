// Exercicio 1
// Você é o gerente de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres em uma
// semana. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia da
// semana. Crie um programa que calcule o valor total das vendas em uma semana

// let precoHamburger = 10;
// let vendasPorDia = [15, 20, 18, 22, 25, 30, 12]; // Quantidade de hambúrgueres vendidos por dia
// let totalVendas = 0;

// for(let i = 0; i < vendasPorDia.length; i++){
//     let valorDia = vendasPorDia[i] * precoHamburger;
//     totalVendas += valorDia;
//     console.log(`Dia ${i + 1}: ${vendasPorDia[i]} hambúrgueres = R$ ${valorDia}`);
// }

// console.log(`\nTotal de vendas na semana: R$ ${totalVendas}`);

// ==========================

// Exercicio 2

// let cardapio = {
//     bacalhau: 70,
//     sopa: 30,
//     picanha: 80,
// }
// console.log("==== Cardapio =====")

// for(item in cardapio){
//     console.log(item + " - R$ "+cardapio[item] );

// }

// ==========================

// Exercicio 3
// Você é o caixa de uma lanchonete e precisa contar o dinheiro recebido até que a última venda do dia seja
// feita. Crie um programa que simule a contagem do dinheiro recebido a cada venda até o fechamento da
// lanchonete.

// let vendas = [400, 200, 500, 400, 500]; // Valores recebidos em cada venda
// let totalRecebido = 0;
// let i = 0; // Índice para percorrer o array

// while(i < vendas.length){
//     totalRecebido += vendas[i];
//     console.log(`Venda ${i + 1}: R$ ${vendas[i]} - Total acumulado: R$ ${totalRecebido}`);
//     i++;
// }

// console.log(`\n=== FECHAMENTO DA LANCHONETE ===`);
// console.log(`Total recebido no dia: R$ ${totalRecebido}`);


// ======================

// Exercicio 4
// Você é o entregador de uma lanchonete e precisa entregar pedidos até que não haja mais pedidos
// pendentes. Crie um programa que simule a entrega de pedidos até que não haja mais pedidos na lista

// let pedidosPendentes = ["Pedido #1 - Hambúrguer", "Pedido #2 - Pizza", "Pedido #3 - Batata Frita", "Pedido #4 - Refrigerante", "Pedido #5 - Sanduíche"];

// console.log(`=== INÍCIO DAS ENTREGAS ===`);
// console.log(`Total de pedidos pendentes: ${pedidosPendentes.length}\n`);

// while(pedidosPendentes.length > 0){
//     let pedidoEntregue = pedidosPendentes.shift(); // Remove o primeiro pedido da lista
//     console.log(`✓ Entregue: ${pedidoEntregue}`);
//     console.log(`  Pedidos restantes: ${pedidosPendentes.length}\n`);
// }

// console.log("=== TODAS AS ENTREGAS CONCLUÍDAS ===");
// console.log("Não há mais pedidos pendentes!");

//==========================

// Exercicio 5
// Estrutura de Repetição - DO...WHILE:
// Exercício 5: Adivinhe o Número Secreto para Desconto
// Você deseja criar um programa que permite aos clientes da sua lanchonete adivinharem um número secreto
// para ganhar um desconto. Eles podem tentar quantas vezes quiserem, mas só ganharão o desconto quando
// adivinharem o número secreto. Crie um programa que use a estrutura do...while para permitir que os clientes
// tentem adivinhar o número secreto.

// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// let numeroSecreto = 7; // Número secreto para ganhar o desconto
// let tentativa;
// let tentativas = 0;

// console.log("=== ADIVINHE O NÚMERO SECRETO E GANHE DESCONTO! ===");
// console.log("Dica: O número está entre 1 e 10\n");

// do {
//     tentativa = parseInt(prompt("Digite um número de 1 a 10: "));
//     tentativas++;
    
//     if(tentativa === numeroSecreto){
//         console.log(`\n🎉 PARABÉNS! Você acertou o número secreto (${numeroSecreto})!`);
//         console.log(`Você ganhou um desconto especial!`);
//         console.log(`Total de tentativas: ${tentativas}`);
//     } else {
//         console.log(`❌ Errado! Tente novamente. (Tentativa ${tentativas})`);
//         if(tentativa < numeroSecreto){
//             console.log("💡 Dica: O número é maior!");
//         } else {
//             console.log("💡 Dica: O número é menor!");
//         }
//         console.log("");
//     }
// } while(tentativa !== numeroSecreto);

// console.log("\n=== Obrigado por participar! ===");

// ========================================

// Exercicio 6



