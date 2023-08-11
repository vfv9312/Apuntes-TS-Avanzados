// NICO => [N,I,C,O] => string => string[]  // si agregamos un string que devulva un array de string
//[N,I,C,O] = NICO => string[] => string  // si agragamos un array de string lo agrupara y sera un string
//Con la sobrecarga de funciones definimos diferentes firmas de una función en la que cada firma puede manejar cierto tipado de entrada y salida. TypeScript decidirá de manera automática qué firma es la correcta para usar basándose en los argumentos enviados y el tipo de datos de estos.



function pareStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string, el metodo join uno todo
  }else {
    return input.split(''); // string[], el metodo split lo divive por cada espacio
  }

}

const rtaArray = pareStr('NICO');
//rtaArray.reverse();  marca error por que no sabe si es un array
if (Array.isArray(rtaArray)) {//tenemos que inferir si es un array aunque ya lo convirtamos porque ts no nos abilitara la ayuda si no sabe que es
  rtaArray.reverse();// voltea el array y regresara O, C, I, N
}
console.log('string[] ', rtaArray);

const rtastring = pareStr(['N','I','C','O']);
//rtastring.toLocaleUpperCase();  marca error por que no sabe que ya es un string y tenemos que inferir
if (typeof rtastring === 'string') { // con esto inferimos y le confirmamos que si es un string
  rtastring.toLocaleUpperCase();
}
console.log('array ',rtastring);


