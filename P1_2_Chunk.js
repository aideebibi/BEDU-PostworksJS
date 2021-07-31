/*
 #########################
 #   EJERCICIO 2: CHUNK  #
 #########################
 
  
 Escribir una función chunk que recibe un arreglo y un número entero size. 
 La función debe dividir el arreglo en múltiples arreglos del tamaño determinado por size.
*/

function chunk(array, size) {
    let arregloPrincipal = [];
    for ( let i = 0; i < array.length; i+=size){
        let subArreglo = array.slice(i, i+size);
        arregloPrincipal.push(subArreglo);
    }
    return arregloPrincipal;
}

var data = [1, 2, 3, 4, 5, 6, 7, 8];

console.log('Test 1:', chunk(data, 1)); // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]