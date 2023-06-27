//Caso o cliente compre 5 ou mais produtos, o mais barato deles sairá de graça!
//calcule o valor correto que o cliente deve pagar
//A entrada será sempre um array contendo apenas números inteiros e positivos 
//representando o valor de cada um dos produtos (em centavos).
//Imprima na tela apenas um número que representa o total que deve ser pago pelo cliente 
//(aplicando a promoção quando fizer sentido, claro).

function solucao(precos) {

    if (precos.length >= 5) {

        let sum = 0;

        for (let value = 0; value < precos.length; value++) {
            sum += precos[value];
        }
        let newPrice = sum - Math.min(...precos);

        console.log(newPrice);
    } else {
        let sum = 0;

        for (let value = 0; value < precos.length; value++) {
            sum += precos[value];
        }
        console.log(sum);
    }
}