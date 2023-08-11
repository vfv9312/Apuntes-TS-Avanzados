"use strict";
var ROLES;
(function (ROLES) {
    ROLES["ADMIN"] = "admin";
    ROLES["SELLER"] = "seller";
    ROLES["CUSTOMER"] = "customer";
})(ROLES || (ROLES = {}));
//declaramos un objeto con los types que ya declaramos y en role le asignamos el enum con valor "admin"
const nicoUser = {
    username: 'nicobytes',
    role: ROLES.ADMIN
};
