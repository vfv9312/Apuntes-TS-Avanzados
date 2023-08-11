export enum ROLES { //creamos un enum
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}
//creamos un type de un objeto el cual el atributo role es un enum
export type User = {
  username :string;
  role : ROLES;
}

//declaramos un objeto con los types que ya declaramos y en role le asignamos el enum con valor "admin"
const nicoUser : User = {
  username:'nicobytes',
  role: ROLES.ADMIN

}
