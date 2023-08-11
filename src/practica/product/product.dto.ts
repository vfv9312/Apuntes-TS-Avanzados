import {Product} from './producto.model';

//Los tipos Omit y Pick en TypeScript son utility types que te permiten crear un nuevo tipo basado en un tipo existente, pero omitiendo o seleccionando algunas de las propiedades del tipo original.


//con omit excluimos algunos de los types que no necesitamos como id o category por x razon al momenot de heredar
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId:string;
}
 //con pick es lo mismo solo que las que seleccionemos seran las unicas que se van a heredar
type example = Pick<Product, 'color'| 'size'>



//Los tipos Partial y Required en TypeScript son utility types que te permiten crear un nuevo tipo basado en un tipo existente, pero haciendo que todas las propiedades de ese tipo sean opcionales u obligatorias.

export interface updateProductDto extends Partial <CreateProductDto>{ //Partial convierte todos los type de CreateProductDto en opcionales como si tuvieran ? todos

}

//lo contrario del Partial es Requiered

export interface updateProductDto2 extends Required <CreateProductDto>{ //Required convierte todos los type de CreateProductDto en obligatorio

}

type example2 = Required <CreateProductDto>;//se puede ver que size que era opcional ahora es obligado

//Readonly type
//El tipo Readonly en TypeScript es un utility type que te permite crear un nuevo tipo basado en un otro existente, pero haciendo que todas las propiedades de ese tipo sean de solo lectura.


//Anidamiento de utility types
//Podemos utilizar el anidamiento para poder fusionar las distintas características de los diferentes utility types.
export interface FindProduct extends Readonly<Partial<CreateProductDto>>{ //le decimos que solo sea de lectura y son opcionales

}

type example3 = Readonly<Product>;// los conviertes todo en lectura por lo que no podremos editar los parametros de busqueda
