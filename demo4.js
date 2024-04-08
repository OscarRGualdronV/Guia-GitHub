// function sumar(...numeros){
//     console.log(numeros);

//     let suma = 0;
//     for (let i = 0; i < numeros.length; i++){
//         suma += numeros[i];
//     }
// return suma
// } 

// console.log(sumar(5,4,87));
// console.log(sumar(12,52,48,52));

let a = null;
let b = "Texto1";
let c = "Texto2";
let d = undefined;

let resultado = a ?? b ?? c ?? d;
console.log(resultado)