//El never type se usa para funciones que nunca van a terminar o que detienen el programa. Con esto TypeScript nos ayuda a detectarlos como por ejemplo un ciclo infinito cuando lanzamos un mensaje de error.
const withoutEnd = () => {
  while (true) {
    console.log('nunca parar de aprende');
  }
}

const fail = (mensaje:string)=>{//never entra en la funciones que nunca van a parar
throw new Error(mensaje);
}

const example = (input:unknown) =>{
  if (typeof input === 'string') {
    return 'es un string'
  }else if (Array.isArray(input)){ // no hay comparador de array por lo que se hace de este modo
    return 'es un array'
  }
  return fail('not match');
}

console.log(example('Hola'));
console.log(example([1,2,3,4]));
console.log(example(12345));
console.log(example('Hola denuevo'));


