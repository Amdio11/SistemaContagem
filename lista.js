// Saber o número total de alunos (√)
// Percorrer de 0 até o número total de alunos (√)
// * Se o número for 0, escrever "ZERO" na tela (√)
// * Se o número for ímpar, escrever "ÍMPAR" e o número (√)
// * Se o número for par, escrever "PAR" e o número (√)

let totalDeAlunos = 5;

let listaDeAlunos = ["Ajax", "Bia", "Carlos", "Dudu", "Ema"];
listar = listaDeAlunos.length;

console.log(totalDeAlunos);

for( let i = 0; i < listar; i++){
    // console.log(i);
    if(i == 0){
        console.log(i + " ZERO")
    }else if(i % 2 != 0){
        console.log(`${i}  ÍMPAR`)
    }else{
        console.log(`${i} PAR`)
    }
};

// Para escrever uma palavra ao contrario usei: 'texto'.split('').reverse().join('')
let fruta = "BANANA";

console.log(fruta + " " + 'escrito ao contrario fica assim'+ ": " + 'BANANA'.split('').reverse().join(''));


