//você deve desenvolver o programa que calcula a pontuação final do clube a depender desses resultados 
//em cada partida.

//A entrada será sempre composta por apenas uma variável resultados 
//que é um array contendo as várias strings, que definem qual foi o resultado do time em cada partida

// V, que representa que o time venceu essa partida
// E, que representa que o time empatou essa partida
// D, que representa que o time perdeu essa partida

//Imprima na tela apenas um número representando a quantidade de pontos ganhos pelo time na competição.

function solucao(resultados) {

    let win = 0;
    let aTie = 0;

    for (let p = 0; p < resultados.length; p++) {
        if (resultados[p] === "V" || resultados[p] === "v") {
            win += 3
        } else if (resultados[p] === "E" || resultados[p] === "e") {
            aTie++;
        }
    }

    let totalPoints = win + aTie;

    console.log(totalPoints);
}
