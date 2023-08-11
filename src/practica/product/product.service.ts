import {Product} from './producto.model';
import {Id} from '../base.mode';
import { CreateProductDto, FindProduct, updateProductDto } from './product.dto';
import { fa, faker } from '@faker-js/faker';

export const products : Product[]= [];

export const addProduct = (data:CreateProductDto): Product =>{
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }
  products.push(newProduct);
  return newProduct;
}


//Acceder al tipado por indice
//enves de colocar el typado Id podemos agregar el tipado especifico de alguna interface
//antes : export const updateProduct = (id: Id, changes: updateProductDto): Product =>{
  // ahora con accedo al tipado por indice :
export const updateProduct = (id: Product['id'], changes: updateProductDto): Product =>{
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index]={
    ...prevData,
    ...changes
  }
  return products[index];
}

export const finProducts =(dto:FindProduct): Product[] =>{

  return products;
}
