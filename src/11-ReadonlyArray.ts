//En TypeScript, ReadonlyArray es un tipo que representa una versión de solo lectura de un array. Esto quiere decir que una vez creado un ReadonlyArray, no puedes cambiar sus elementos o su longitud.

//ReadonlyArray
//Este tipo de dato es un array, pero la principal diferencia con los arrays “normales” es que no existen ninguno de los métodos de mutación, tales como pop, push, shift, etc.

const numbers: ReadonlyArray<number> = [1,2,3,4,5,6,7];
//no deja unsarlas por que muta el array
// numbers.push(9);
// numbers.pop();
// numbers.unshift();

//estos si deja por que aqui no mutamos el array
numbers.reduce(()=>0);
numbers.map(()=>0);
numbers.filter(()=>{});
