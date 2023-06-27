//você deve desenvolver o programa que calcula a pontuação final do clube a depender desses resultados 
//em cada partida.

//A entrada será sempre composta por apenas uma variável resultados 
//que é um array contendo as várias strings, que definem qual foi o resultado do time em cada partida

// V, que representa que o time venceu essa partida
// E, que representa que o time empatou essa partida
// D, que representa que o time perdeu essa partida

//Imprima na tela apenas um número representando a quantidade de pontos ganhos pelo time na competição.

function solucao(resultados) {
    //seu codigo aqui
    
    let pontos = 0;
    
    for (resultado of resultados){
        if (resultado === 'V'){
            pontos += 3;
        } else if (resultado === 'E'){
            pontos += 1;
        } 
    }
    
    console.log(pontos);
}