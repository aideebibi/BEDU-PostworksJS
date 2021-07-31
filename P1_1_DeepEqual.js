/*
 ################################
 #   EJERCICIO 1: DEEP EQUAL    #
 ################################
 
 Escribir una función llamada deepEqual que reciba dos argumentos y retorne true si son el mismo valor o si son objetos con las mismas propiedades, en este último caso los valores de las propiedades deben ser comparados con una llamada recursiva de deepEqual.
 Usando el operador typeof puedes determinar si ambas variables son objetos, de ser así se debe llamar nuevamente deepEqual para comparar las propiedades de dichos objetos, en caso contrario solo es necesario revisar si ambas variables son estrictamente iguales.
 La función Object.keys() es útil para obtener las propiedades de los objetos.
*/

function deepEqual(a, b) {
    // Se analiza el caso base
    if( a === b ){
        return true;
    }
    // Para objetos
    else{
        var tipoA = typeof(a)
        var tipoB = typeof(b)
        if( tipoA == tipoB && Object.keys(a).length == Object.keys(b).length){
            for(let propiedades in a) {
                deepEqual(a[propiedades], b[propiedades])
            }
            return true;
        }
    }
    return false;
}

const john = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
