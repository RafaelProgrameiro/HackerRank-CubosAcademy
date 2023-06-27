//Numa competição de tiro ao alvo, cada competidor pode fazer uma certa quantidade de disparos. 
//A cada disparo é atribuida uma pontuação que vai de 0 a 100. Para que o competidor seja aprovado 
//para a próxima fase, ele precisa ter pelo menos 3 disparos com pontuação acima de 70 pontos.

//Input Format
//A entrada do problema será sempre um array de números chamado disparos, 
//que contém a pontuação de cada disparo.

//Output Format
//Caso o competidor seja aprovado, imprima na tela a quantidade de disparos acima de 70 pontos. 
//Caso o competidor seja eliminado, imprima apenas a mensagem ELIMINADO


function solucao(disparos) {

    let counter = 0;

    for (let c = 0; c < disparos.length; c++) {

        if (disparos[c] > 70) {
            counter++;
        }
    }

    if (counter >= 3) {
        console.log(counter);
    } else {
        console.log('ELIMINADO');
    }

}