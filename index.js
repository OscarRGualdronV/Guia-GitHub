// for (let index = 0; index <= 5; index++){
//     setTimeout(function(){console.log(index)}, 1000)
// }

// setTimeout(function(){
//     console.log("valor final de 'i' usando 'var': ", index);
// }, 60

function laCajaDePandora(numero){
    const hexadecimal = numero.toString(16)
    const binario = numero.toString(2)
    console.log(`El numero en hexadecimal es: ${hexadecimal}`);
    console.log(`El numero en binario es: ${binario}`);
    }

laCajaDePandora(100);