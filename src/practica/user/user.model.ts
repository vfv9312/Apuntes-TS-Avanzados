import { BaseModel } from "../base.mode";

export enum ROLES{
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

export interface User extends BaseModel{ //CON extends heredamos los interfacer de BaseModel
  username: string;
  roles: ROLES;

}

// const vladi:User = {
// id:'55',
// createdAt: new Date(),
// updatedAt: new Date(),
// username:'VLADIMIR',
// roles:ROLES.CUSTOMER
// }
