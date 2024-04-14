function laCajaDePandora(numero){

    if (typeof numero !== 'number' || !Number.isInteger(numero)) {
        throw new Error('El parámetro debe ser un número entero.');
    }

    if (numero % 2 === 0) {
        return numero.toString(2); 
    } else {
        return numero.toString(16); 
    }
    }

    console.log(laCajaDePandora(4));
console.log(laCajaDePandora(5)); 


// index.js

function oscarGualdron() {
    return {
      nombre: "Oscar",
      edad: 32,
      nacionalidad: "Colombia"
    };
  }
  
const informacionOscar = oscarGualdron();

console.log(informacionOscar);
  