//Seu papel é desenvolver a parte do software que calcula a nota final de uma manobra a partir 
//das notas dadas por cada juíz

// Para calcular a nota final da manobra, descarta-se a maior e a menor nota e calcula-se a média 
//aritimética das restantes.

//Você deve imprimir na tela a nota final da manobra, que é a média das notas que não foram descartadas.


function solucao(notas) {
	//seu codigo aqui
    
    let maiorNota = 0;
    let menorNota = notas[0];
    let soma = 0;    
    
    for (nota of notas){
        
        if (maiorNota < nota){
            maiorNota = nota;
        }

        if (menorNota > nota){
            menorNota = nota;
        } 
        
        soma += nota;
    }   
    console.log((soma - maiorNota - menorNota) / (notas.length - 2));    
       
}