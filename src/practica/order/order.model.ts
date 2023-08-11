import { BaseModel } from "../base.mode";
import { Product } from "../product/producto.model";
import { User } from "../user/user.model";

interface Order extends BaseModel{
  products: Product[];
  user: User;
}
