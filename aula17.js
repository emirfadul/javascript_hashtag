// Simulador de Reprodução de Filme
let reproduzido = true;
let entrada = ""; // simular trocando o valor para 1 e 2


function reproduzirFilme(){
  console.log("Tecla PLAY acionada.");
}

function pausarFilme(){
  console.log("Tecla PAUSE acionada.");
}

function sairFilme(){
  console.log("Sair do Filme.");
}

function opcoesConfiguracao(entrada){

  do{
    console.log("Opçoes: 1 - pausar, 2 - sair");
    console.log("opçáo: "+entrada);

    if(entrada === 1){
      pausarFilme();
      reproduzido = false;
    }else if(entrada === 2){
      sairFilme();
      reproduzido = false;
    }else{
      console.log("Opçáo inv[alida.");
      break
    }
  }while(reproduzindo);  
}

reproduzirFilme();
opcoesConfiguracao(entrada);
