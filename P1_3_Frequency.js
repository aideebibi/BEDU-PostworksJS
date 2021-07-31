/*
 #############################
 #   EJERCICIO 3: FRECUENCY  # 
 #############################

 Escribir una función frequency que recibe un string como argumento. Esta función debe contar la frecuencia o el número de veces que se repite cada carácter. El resultado debe mostrarse en un objeto donde las propiedades sean los caracteres, y los valores sean la frecuencia. Los resultados deben ordenarse ascendentemente por los caracteres y no la frecuencia.
*/

function frequency(string) {
    let caracteres = {};
    let ordenado = {}
    for(var elemento of string){
        if(caracteres.hasOwnProperty(elemento)){
            caracteres[elemento] = caracteres[elemento] +1;
        }
        else {
            caracteres[elemento] = 1;
        }
    }
    //Ordenando
    arrAtributos = Object.keys(caracteres).sort()
    for(var atributo of arrAtributos){
        ordenado[atributo] = caracteres[atributo];
    }
    return ordenado;

}

console.log('Test 1:', frequency('cccbbbaaa'))
// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}