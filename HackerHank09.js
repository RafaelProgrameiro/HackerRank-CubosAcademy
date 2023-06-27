//Seu papel como desenvolvedor(a) é fazer a parte do código que, ao receber a letra palpite do usuário e 
//a palavra escondida, retornará a quantidade de acertos obtidos pelo usuário nesse palpite.

//A entrada será sempre duas strings: o palpite feito pelo jogador e a palavra a ser descoberta. 
//O palpite será sempre apenas um caractere minúsculo e sem acento. A palavra será sempre composta apenas por caracteres minúsculos e sem acento.

// A saída sempre será a quantidade de acertos do palpite.


function solucao(palpite, palavra) {
    let letter = 0;

    for (let a = 0; a < palavra.length; a++) {

        if (palavra[a] === palpite) {
            letter++;
        }
    }

    console.log(letter)
}