//Cada imagem é um item de um array. O carrossel de vocês tem 7 imagens, 
//o que significa que elas ficam guardadas nos índices de 0 a 6 de um array.

//calcule qual é o índice da imagem que deve ser exibida a depender da quantidade 
//de cliques que tenham sido dados nos botões da direita ou da esquerda.

//A entrada será sempre uma única variável sequencia que guarda sempre uma sequencia de 
//caracteres > ou < indicando os cliques do usuário.


function solucao(sequencia) {
	//seu codigo aqui
    
    let indice = 0;
    
    for (click of sequencia){
                        
        if (click === '>'){
            indice += 1;
        } else {
            indice += -1;
        }    
        
        if (indice === 7){
            indice = 0;
        } else if (indice === -1){
            indice = 6;
        }                
    }    
    console.log(indice);    
    

}