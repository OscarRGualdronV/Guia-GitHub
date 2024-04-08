// const perro={
//     raza:'salchicha',
//     nombre:'jose',
//     edad:6,
//     color:'marron',
// };

// const perro2 = {...perro}

// perro.collar = true;

// console.log(perro)
// console.log(perro2)

// const miArreglo = [true, 'palabra', {a:5}];

// miArreglo.push('nuevo elemento');
// console.log(miArreglo)

/////////////////////////////////////////////////////////

const miArreglo = [true, 'palabra', {a:5}];

const miNuevoArreglo = [...miArreglo, 'Nuevo elemento'];

console.log(miArreglo)
console.log(miNuevoArreglo)