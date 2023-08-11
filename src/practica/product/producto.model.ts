import {Category} from './category.model';
import { BaseModel } from '../base.mode';

export type Size = 'S' | 'M' | 'L' | 'XL';//Los type deben comenzar con mayuscula y no podemos extender

export interface Product extends BaseModel { //extendemos del modelo Base Model
  title: string;
  image:string;
  descrption: string;
  stock: number;
  size?:Size;
  color: string;
  price:number
  category: Category;
  isNew: boolean;
  tags: string[];
}


