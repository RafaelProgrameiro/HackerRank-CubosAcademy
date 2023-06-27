//fazer um programa que, dado um par de letras qualquer, imprima na tela as palavras que começam 
//com essas duas primeiras letras.

//A entrada será sempre composta por três variáveis:

//palavras: que será sempre um array de strings, contendo palavras que servem como base 
//para a sua busca. As palavras sao sempre com todas as letras minusculas e sem acentos

//primeiraLetra: que será sempre um string contendo apenas um caractere (minúsculo), que deve 
//ser a primeira letra das palavras

//segundaLetra: que será sempre um string contendo apenas um caractere (minúsculo), que 
//deve ser a segunda letra das palavras 

//imprimir na tela as palavras contidas no array de palavras que tem como primeira letra a 
//primeiraLetra fornecida na entrada e a segunda letra a segundaLetra fornecida na entrada. 

//Imprima uma palavra em cada linha.

//Caso não nenhuma palavra do array de palavras atenda aos requisitos, imprima na tela NENHUMA

function solucao(primeiraLetra, segundaLetra, palavras) {
    //seu codigo aqui
    
    let texto = false;
        
    for (palavra of palavras){
        if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra){
            texto = true;
            if (texto){
                console.log(palavra);
            }
        }        
    }

    if (!texto) {
        console.log('NENHUMA');
    }   
  
}