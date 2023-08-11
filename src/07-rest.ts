//Parámetros rest
// Los parámetros rest nos permiten enviar la cantidad que queramos de parámetros a una función, casi sin limite.
//Este seria un caso normal

import {User, ROLES} from './01-enum';

const currentUser:User = {
  username : 'gato',
  role: ROLES.SELLER

}

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}
const rta = checkAdminRole();

console.log(rta);

//funcion 2
export const checkRole = (role1:string, role2:string) => {
  if (currentUser.role === role1) {
    return true;
  } else if (currentUser.role === role2){
    return true
  } else
  return false;
}

const rta2 = checkRole('admin', ROLES.CUSTOMER);
console.log('checkRole ' , rta2);

//si queremos mandar varios tendriamos que mandar un array


//funcion 2
export const checkRoleV3 = (roles: string[]) => {// se declara el parametro como un array llamado roles
  if (roles.includes(currentUser.role)) { //si incluye el array el role que declaramos en currentUser
    return true;
  }else{
    return false;
  }
}

const rtaV3 = checkRoleV3([ROLES.CUSTOMER, ROLES.ADMIN, 'A', 'S','D','B']); // enviamos los argumentos en un array
console.log('checkRoleV3 ' , rtaV3);

//FUNCION 3
export const checkRoleV4 = (...roles: string[]) => {// los ... nos permite indicar que se anexara al array cada valor recibido
  if (roles.includes(currentUser.role)) { //si incluye el array el role que declaramos en currentUser
    return true;
  }else{
    return false;
  }
}

const rtaV4 = checkRoleV4(ROLES.CUSTOMER, ROLES.ADMIN, 'A', 'S','D','B'); // enviamos los argumentos sin necesidad de array
console.log('checkRoleV4 ' , rtaV4);
