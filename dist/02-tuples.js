"use strict";
const prices = [1, 2, 3, 4, 5, 6, 6, 'as']; //array con valor de number y o string permitido
prices.push(1);
prices.push('1');
//Las tuplas nos sirven para hacer un array fuertemente tipado especificando el tipo de dato de cada elemento del array así como la cantidad de elementos. Para hacer una tupla lo hacemos de la siguiente manera
//creamos un tuples
let user;
user = ['angel', 15];
// en este caso solo permite si se usa los datos asignados y que el primer dato sea un string y segundo numero
let apodo;
apodo = ['jesus', 20, true];
//en este caso debe ver un string, un number y un boolean en ese orden si no fall
//sin embargo podemos destructurar si no nos interesa algun dato
let datos; //declaramos una tuples
datos = ['jose', 30, true]; //le damos el valor
const [usuario, edad] = datos; //ignoramos el ultimo dato que no nos interesa
console.log(usuario);
console.log(edad);
