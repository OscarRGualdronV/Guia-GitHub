// const persona ={
//     nombre:'oscar',
//     amigos: ['juan','carlos','saul'],

//     saludar: function(){
//         console.log("Hola, soy", this.nombre);

//     },
// };

// persona.saludar();

// function persona(nombre,edad){
//     this.nombre = nombre;
//     this.edad = edad;
// }


// persona.prototype.saludar = function(){
// }
//     console.log("hola, soy", this.nombre);

// const persona1 = new persona('oscar',31);
// console.log(persona1)
// persona1.saludar();

class Persona{
    constructor (nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
        this.amigos = [];
        this.sentado = true;
    }

    agregarAmigo(nombreAmigo){
        this.amigos.push(nombreAmigo);
    }

    pararse(){
        this.sentado = false;
    }

    sentarse(){
        this.sentado
    }
}

class Doctor extends Persona {
    constructor(nombre, edad, nMatricula){
        super(nombre, edad);
        this.nMatricula = nMatricula;
    }
}

const doctor1 = new Doctor('jorgito', 58, 586413)

console.log(doctor1)

// const persona1 = new Persona('oscar', 32);

// console.log(persona1)

// persona1.agregarAmigo('pedro');
// persona1.agregarAmigo('andrea');

// console.log(persona1)

// persona1.pararse();

// console.log(persona1)

// class superHeroe {
//     constructor(nombre,identidad,superpoder){
//         this.nombre = nombre;
//         this.identidad = identidad;
//         this.superpoder = superpoder;
//     }
//     volar(){
//         console.log("Estoy volando")
//     }
// }

// let superman = new superHeroe('Clark Kent', 'Superman', ['volar', 'fuerza'])

// console.log(superman)

// superman.volar();

