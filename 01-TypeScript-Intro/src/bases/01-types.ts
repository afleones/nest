export let name: string = 'Andrés';
export const age: number = 26;
export const isValid: boolean = true;

name = 'Felipe';
// name =  123;
// name = false;

export const templateString = ` Esto es un string
multilinea
que puede tener
" dobles
' simples
inyectar valores:  ${ name }
expresiones: ${ 1 + 1 }
números: ${ age }
booleanos: ${ isValid }`

// console.log(templateString);
