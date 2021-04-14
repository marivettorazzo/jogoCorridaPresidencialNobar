
function questionario(escolha,vencedor,perdedor,msgVencedor,msgPerdedor,msgEscolhaErrada){
   
    if(escolha == vencedor ){
        return document.write(msgVencedor) 
    } else if(escolha == perdedor ) {
        return document.write(msgPerdedor)
    } else {
        return document.write(msgEscolhaErrada);
    }
        
}

function agora(pergunta){ 
      for( var i = 0;i<3;i++){
       var ja = prompt(pergunta);
          if(ja != "1" && ja != "2"){
              alert("Valor inválido");
              ja;
          } else {
                return(parseInt(ja));
          }
      }
}
