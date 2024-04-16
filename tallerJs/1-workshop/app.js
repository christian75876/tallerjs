// Declaracion de tipos de variables y algunos metodos

let miNumero = 10;
console.log(miNumero);

let miBooleano = true
console.log(typeof (miBooleano));

let miCadena = 'JavaScrip';
console.log(miCadena.length);

let miArray = ['string', 10, [1, 2, 3]];
console.log(miArray);

let miObjeto = {
    name: 'Christian',
    age: 28,
    city: 'Medellin'
}


let nombreUsuario = prompt('Ingrese su nombre');
alert(nombreUsuario);

let confirmacion = confirm('Te gusta JavaSrip');
console.log(confirmacion);

console.warn('Esto es solo una practica');

console.error('Ingreso un tipo no valido');

let num = [1,2,3,4,5];
console.table(num);