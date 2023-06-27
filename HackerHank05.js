//deve comprar a casa em um ano e vendê-la em outro, e deve fazê-lo com prejuízo. 
//Ela quer minimizar suas perdas financeiras.

//Encontre e imprima a quantidade mínima de dinheiro que Letícia deve perder se comprar 
//a casa e revendê-la nos próximos anos.

//A entrada será sempre um array de inteiros de tamanho variado contendo o preço da casa nos próximos anos.
//A saída sempre será um inteiro representando a perda mínima que Letícia terá.

function solucao(precos) {    
    // seu codigo aqui
      
      let prejuizo = 999999999999;
      
      for (let i = 0; i < precos.length; i++){
            for (let j = i + 1; j < precos.length; j++){             
                if (precos[i] - precos[j] > 0){                        
                    if(precos[i] - precos[j] < prejuizo){                        
                        prejuizo = precos[i] - precos[j];             
                    }
                }
            } 
      }      
      console.log (prejuizo);   
          
  }

