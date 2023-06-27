//Caso o cliente compre 5 ou mais produtos, o mais barato deles sairá de graça!
//calcule o valor correto que o cliente deve pagar
//A entrada será sempre um array contendo apenas números inteiros e positivos 
//representando o valor de cada um dos produtos (em centavos).
//Imprima na tela apenas um número que representa o total que deve ser pago pelo cliente 
//(aplicando a promoção quando fizer sentido, claro).

function solucao(precos) {
    //seu codigo aqui   
    let soma = 0;
    let menorValor = precos[0];

    for (item of precos){     

        soma += item;        
        if (menorValor > item){
            menorValor = item;
        }
    }
    
    if (precos.length > 4){
        soma -= menorValor;
    }
    
    console.log (soma);     
        
}