//Unknow type
//Este tipo de dato es la mejora de any, ya que nos da la flexibilidad que en ocasiones queremos pero sin apagar por completo el análisis de código estático. Unknown nos fuerza a hacer una verificación de tipo.

let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar =[];
anyVar = {};

//como es anyVar un any puede ser cualquier cosa y por eso typescrip lo acepta, sin embargo la ultima vez lo declaramos como un objeto
//por lo que daria un error mas adelante y no lo sabriamos por que hasta ahora no lo marca y no tendremos ningun tipado
let isNew:boolean = anyVar;


let unknowVar:unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar =null;
unknowVar =1;
unknowVar=[];
unknowVar={};



//no va permitir asignar let isOld :boolean = unknowVar; almenos que verifiquemos el tipo que se recibe
if (typeof unknowVar === 'string') {
  unknowVar.toLowerCase();
}else if(typeof unknowVar === 'boolean'){
  let isOld :boolean = unknowVar;
}

const parse = (str:string):unknown => {
  return JSON.parse(str);
}
