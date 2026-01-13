// Simulador de aplicativo de corrida
let nome = "João";
let partida = "Avenida Paulista";
let destino = "Parque Ibirapuera";

function registrar(nome){
  while(true){
    if(nome === ""){
      console.log("Preencha com o nome");     
      break;
    } else if(typeof nome !== "string"){
      console.log("O nome está incorreto !")
      break;
    }else{
      console.log(`Registro confirmado do usuario ${nome}!`)
      break;
    }
  }
}

registrar(nome)

//corrida
function selecionar(partida, destino){
  console.log("Selecionar partida e destino.")

  while (partida !== destino){
    if(partida === "" || typeof partida !== "string"){
      console.log("Digite a partida correta.")
      break
    }else if(destino === "" || typeof destino !== "string"){
      console.log("Difite o destino correto.")
      break
    }else{
      console.log("Corrida confirmada, partida: "+partida+" e destino: "+destino)
      break
    }
  }
}
selecionar(partida,destino)

