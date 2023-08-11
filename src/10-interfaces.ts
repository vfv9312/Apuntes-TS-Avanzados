type Sizes = 'S' | 'M' | 'L' | 'XL';
 //Las interfaces funcionan muy similar a como lo hace type, pero en las interfaces solo aplica para los objetos
 //Las interfaces nos permiten crear moldes de objetos con sus respectivas propiedades y tipado. Para generar interfaces usamos la palabra reservada interface.
// son iguales lo unico que lo diferencia esque interface se puede extender y type no puede


// type Productos =  {
//   id: string | number;
//   title: string;
//   price: number;
//   createAdt: Date;
//   stock:number;
//   size?: Sizes;
//   }

interface Product  {
id: string | number;
title: string;
price: number;
createAdt: Date;
stock:number;
size?: Sizes;
}


const product : Product[]= [];

product.push({
  id:'1',
  title: 'jabon',
  price:50,
  createAdt : new Date(),
  stock: 20,

})
