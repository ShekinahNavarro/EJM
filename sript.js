//FUNCION QUE MUESTRA LOS 3 PRIMEROS NUMEROS
function contar(){
    for (let i = 1; i <= 10; i++){
        console.log(i);
    }
}

//FUNCION PARA SALUDAR CON PARAMETRO
function saludar (nombre){
    console.log (`¡hola ${nombre}!`);
}
//PI
const PI = 3.14159

//EXPORTAMOS LA FUNCION
export {contar,saludar,PI}
 
