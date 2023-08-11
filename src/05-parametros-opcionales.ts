export const createProduct = (
  id: string| number,
  isNew? :boolean,
  stock?: number//debemos dejar los parametros opcionales al final si no marcara error
)=> {
  return {
    id,
    stock: stock || 10, //esta es una opcion si no recibimos valor se enviara por defecto un 10
    isNew : isNew ?? true //?? va considerar aunque sea 0 '' o false y dara ese valor
  }
}

//si el balor a ser opcional de booleano hay un detalle
//0 === false
//'' === false
// false === false
// por lo que convertira en true por que pensara que no se le envio el valor por lo que

const p1 = createProduct(1,true,12);//eviamos los datos que pide la arrow funcion.
console.log(p1);//{ id: 1, stock: 12, isNew: true }

const p2 = createProduct(1,true);//si no colocamos el atributo funcional se mandara un undefined
console.log(p2);//{ id: 1, stock: undefined, isNew: false }
// al realizarle que stock sea 10 si no recibe valor entonces arroja { id: 1, stock: 10, isNew: false }


const p3 = createProduct(1,false);
console.log(p3); //{ id: 1, stock: 10, isNew: false }
