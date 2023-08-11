
//parametros por defecto
export const createProduct = (
  id: string| number,
  isNew :boolean = true, // si no recibe nada sera por defecto true
  stock: number = 10 // si no recibe nada sera por default 10
)=> {
  return {
    id,
    stock,
    isNew
  }
}


const p1 = createProduct(1,true,12);
console.log(p1);//{ id: 1, stock: 12, isNew: true }

const p2 = createProduct(1,true);
console.log(p2);//{ id: 1, stock: 10, isNew: true }


const p3 = createProduct(1);
console.log(p3); //{ id: 1, stock: 10, isNew: true }
