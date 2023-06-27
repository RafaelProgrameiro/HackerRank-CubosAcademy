//Seu papel é desenvolver a parte do software que calcula a nota final de uma manobra a partir 
//das notas dadas por cada juíz

// Para calcular a nota final da manobra, descarta-se a maior e a menor nota e calcula-se a média 
//aritimética das restantes.

//Você deve imprimir na tela a nota final da manobra, que é a média das notas que não foram descartadas.


function solucao(notas) {

    let average = 0;
    let count = 0;

    let maxGrade = notas.indexOf(Math.max(...notas));
    notas.splice(maxGrade, 1);

    let minGrade = notas.indexOf(Math.min(...notas));
    notas.splice(minGrade, 1);

    for (let n = 0; n < notas.length; n++) {
        average += notas[n];
        count++;
    }

    let result = average / count;

    console.log(result)
}

let grades = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]

console.log(solucao(grades));