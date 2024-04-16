console.log("Hola Mundo") //console.log "imprime" la variable que se encuentra dentro de () en la consola

//desafio comparar 3 numeros y determinar cual es el mayor.
// n1 n2 n3 si n1 > n2 > n3 -> n1 es el mayor 
let n1 = 5 //se usa let para agregar y asignar una variable
let n2 = 8
let n3 = 15
if(n1 === n2 === n3){ //usar triple = indica igualdad estricta ===
console.log("son todos iguales")
}
else if (n1 > n3 && n1 > n2){ //&& indica "y"
    mayor= n1
}else if(n2 > n3 && n2 > n3){
    mayor= n2
}else if (n3 > n2 && n3 > n2){
    mayor= n3
}
console.log(mayor, "es el mayor numero")

//funciones
//SUMAR

// function Suma(n1, n2, n3){
//     let resultado;
//     resultado = n1 + n2 + n3
//     console.log("la suma de los tres numeros es", resultado)
// }
// Suma(2,3,10)

// function Comparar (n1, n2, n3){
// if (n1 > n3 && n1 > n2)
// mayor = n1
// else if (n2 > n3 && n2 > n1)
// mayor = n2
// else if ( n3 > n1 && n3 > n2)
// mayor = n3
// console.log(mayor, "es el mayor numero")
// return mayor 
// }
// Comparar (2, 5, 10)
// Suma(mayor, 2, 2)
// console.log("Hola")
// let intentos = 6;
// let palabra = "APPLE"; //Vector o array, el array es una lista de elemetos, se escriben entre corchete y entre comas. Los elementos puede ser de tipò nuemro y de tipo texto
// let usuario = "MOUSE"
// let vector = ["A","P","P","L","E"]
// if( usuario === palabra){
//     console.log(Ganaste)
// }else {
//     intentos = intentos - 1;
//     console.log("te quedan", intentos)
//     for (i in palabra) {
//         if (palabra [i] === usuario[i]){
//             console.log(usuario [i], "verde")
//         }else if (palabra.includes(usuario[i])){
//             console.log(usuario[i], "amarillo")
//         }else{
//             console.log(usuario[i], "gris")
//         }

//     }
// }
// function Intentar(intento){
//     if (intento === palabra){
//         console.log(ganaste)
//     }else {
//         intentos = intento - 1;
//         console.log("te quedan", intentos, "intentos");
//         for (i in palabra){
//             if(palabra [i]=== intento [i]){
//                 console.log(intento[i], "verde")
//             }else if (palabra.includes[intento[i]]){
//                 console.log(intento[i], "amarillo")
//                 }else{
//                     console.log(intento[i], "gris")
//                 }
//             }
//         }
//     }
//     console.log["fin de bucle"]
//     if [intentos=== 0](
//         console.log("Perdiste")
//     )
