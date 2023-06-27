//uma letra é sorteada a cada rodada e cada criança que está brincando deve escrever uma palvra 
//de uma determinada categoria que comece com a letra que foi sorteada.
//O seu papel é fazer um programa que calcule quantas crianças perderam na rodada.

function solucao(letra, palavras) {
	//seu codigo aqui    
    let erros = 0;
    
    for (palavra of palavras){
        
        for (primeiraLetra of palavra) {
             
             if (primeiraLetra[0] == letra){
                 break;
            
             } else {
                 erros += 1;
                 break;
             }             
        }     
    }
console.log(erros);      
}