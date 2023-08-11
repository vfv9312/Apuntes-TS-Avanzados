import {addProduct, finProducts, products, updateProduct} from './product/product.service';
import { fa, faker } from '@faker-js/faker';


for (let index = 0; index < 3; index++) {
  addProduct({
   // id: faker.string.uuid(),
    image:faker.image.url(),
    descrption:faker.commerce.productDescription(),
    color:faker.color.human(),
    price:parseInt(faker.commerce.price(), 10),
    tags: faker.helpers.arrayElements(['Otoño','Verano','Invierno','Primavera']),
    isNew:faker.datatype.boolean(),
    title: faker.commerce.productName(),
    //createdAt: faker.date.recent(),
    //updatedAt: faker.date.recent(),
    stock:faker.number.int({min:10, max:200}),
    size: faker.helpers.arrayElement(['M','L','XL']),
    categoryId: faker.string.uuid(),
    //category: {
     // id:faker.string.uuid(),
      //name:faker.commerce.department(),
      //createdAt: faker.date.recent(),
      //updatedAt: faker.date.recent(),
   // }
  })
}



const product = products[0];
updateProduct(product.id, {
  title : 'Mexico',
  stock: 80,
});

finProducts({
  isNew: true
});

console.log(products);
