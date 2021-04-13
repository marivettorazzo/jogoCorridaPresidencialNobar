
function questionario(escolha,vencedor,msgVencedor,msgPerdedor){
    
    if(escolha == vencedor ){
         return document.write(msgVencedor) 
        
    } else{
        return document.write(msgPerdedor)
    }
}

function agora(pergunta){ 
    var ja = prompt(pergunta);
      return parseInt(ja);
}
