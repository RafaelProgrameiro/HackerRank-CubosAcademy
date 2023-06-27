//uma letra é sorteada a cada rodada e cada criança que está brincando deve escrever uma palvra 
//de uma determinada categoria que comece com a letra que foi sorteada.
//O seu papel é fazer um programa que calcule quantas crianças perderam na rodada.

function solucao(letra, palavras) {

    let error = 0;
    let right = 0;

    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].startsWith(letra)) {
            right++;
        } else {
            error++;
        }
    }
    console.log(error);
}