//O seu dever é criar um script para purificar esses dados e utilizá-los em seu trabalho.
//A purificação consiste em retirar os caracteres especiais contidos no nome como exemplificado abaixo:
// !@#$%&*().

function solucao(stringCorrompida) {
    let newString = stringCorrompida.replace(/[!@#$%&*()]/g, "");
    console.log(newString);
}