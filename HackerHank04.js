//Cada imagem é um item de um array. O carrossel de vocês tem 7 imagens, 
//o que significa que elas ficam guardadas nos índices de 0 a 6 de um array.

//calcule qual é o índice da imagem que deve ser exibida a depender da quantidade 
//de cliques que tenham sido dados nos botões da direita ou da esquerda.

//A entrada será sempre uma única variável sequencia que guarda sempre uma sequencia de 
//caracteres > ou < indicando os cliques do usuário.


function solucao(sequencia) {
    const carousel = [0, 1, 2, 3, 4, 5, 6];
    let forward = 0;
    let backward = 0;

    for (let i = 0; i < sequencia.length; i++) {

        if (sequencia[i] === ">") {
            forward++;
        } else if (sequencia[i] === "<") {
            backward++;
        }
    }

    let position = forward - backward;

    if (position >= carousel.length) {

        position %= carousel.length;
    } else if (position < 0) {

        position = carousel.length - Math.abs(position) % carousel.length;
    }

    console.log(carousel[Math.abs(position)]);
}