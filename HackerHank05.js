//deve comprar a casa em um ano e vendê-la em outro, e deve fazê-lo com prejuízo. 
//Ela quer minimizar suas perdas financeiras.

//Encontre e imprima a quantidade mínima de dinheiro que Letícia deve perder se comprar 
//a casa e revendê-la nos próximos anos.

//A entrada será sempre um array de inteiros de tamanho variado contendo o preço da casa nos próximos anos.
//A saída sempre será um inteiro representando a perda mínima que Letícia terá.

function solucao(precos) {

    let minLoss = Infinity;

    for (let p1 = 0; p1 < precos.length; p1++) {
        for (let p2 = 0; p2 < precos.length; p2++) {

            let diference = precos[p1] - precos[p2];

            if (diference < 0 && diference < minLoss) {
                minLoss = diference;
            }
        }
    }

    console.log(Math.abs(minLoss));
}


// CORREÇÃO ABAIXO  
let minLoss = Infinity;


for (let p1 = 0; p1 < precos.length; p1++) {
    for (let p2 = p1 + 1; p2 < precos.length; p2++) { //garante que o index p1 sempre seja antes do p2

        let difference = precos[p2] - precos[p1];
        if (difference < 0 && Math.abs(difference) < Math.abs(minLoss)) { //transformando a perda em positivo para poder realizar a subtração corretamente
            minLoss = difference;

        }
    }
}

console.log(Math.abs(minLoss));


