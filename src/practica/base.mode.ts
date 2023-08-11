//readonly en TS
//Como su nombre lo indica, este feature de TS nos ayuda a tener ciertos atributos solo de lectura. Lo que significa que no pueden ser modificados. Un buen caso de uso es el id y el createdAt.

export interface BaseModel {
  readonly id: string | number; // readonly significa que solo es de lectura por lo que no se puede modificar
  createdAt:Date;
  updatedAt:Date;


}

export type Id = string | number

