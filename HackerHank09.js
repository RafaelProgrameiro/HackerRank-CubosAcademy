//Seu papel como desenvolvedor(a) é fazer a parte do código que, ao receber a letra palpite do usuário e 
//a palavra escondida, retornará a quantidade de acertos obtidos pelo usuário nesse palpite.

//A entrada será sempre duas strings: o palpite feito pelo jogador e a palavra a ser descoberta. 
//O palpite será sempre apenas um caractere minúsculo e sem acento. A palavra será sempre composta apenas por caracteres minúsculos e sem acento.

// A saída sempre será a quantidade de acertos do palpite.

function solucao(palpite, palavra) {
	// seu codigo aqui    
    let soma = 0;
    
    for (letra of palavra){
        if(letra === palpite){
            soma += 1;
        }
    }    
    console.log(soma);
}