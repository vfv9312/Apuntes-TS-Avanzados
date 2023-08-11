
// NICO => [N,I,C,O] => string => string[]  // si agregamos un string que devulva un array de string
//[N,I,C,O] = NICO => string[] => string  // si agragamos un array de string lo agrupara y sera un string

//Cuando el tipado del retorno de una función puede ser más de un tipo de dato (por ejemplo, que el retorno pueda ser string, number o boolean), TypeScript en primera instancia no permite utilizar los métodos propios de un tipo de dato específico a menos que se realice una validación de tipos previamente.

export function pareStr(input : string): string[];
export function pareStr(input : string[]): string;

export function pareStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string, el metodo join uno todo
  }else if (typeof input === 'string') {
    return input.split(''); // string[] , el metodo split lo divive por cada espacio
  }else{
    return true
  }

}

const rtaArray = pareStr('NICO');
//rtaArray.reverse();  marca error por que no sabe si es un array
 rtaArray.reverse();// voltea el array y regresara O, C, I, N

console.log('string[] ', rtaArray);

const rtastring = pareStr(['N','I','C','O']);
//rtastring.toLocaleUpperCase();  marca error por que no sabe que ya es un string y tenemos que inferir
  rtastring.toLocaleUpperCase();
console.log('array ',rtastring);


