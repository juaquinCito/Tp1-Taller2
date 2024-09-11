import fs from "fs"
const siguienteArray = [2, 10, "a", 4, "b", 6, "d", true, "e", 9, 1, "z", 12, "r", "c", false]
const condicion = 5

function filtrar(siguienteArray, condicion) {
    // filtramos los `numbers` y si ya estan incluidos en el array a devolver
    const arrayFiltrado = siguienteArray.filter(posicion =>
        typeof (condicion) == typeof (posicion) && !arrayFiltrado.include(posicion))
    //finalmente ordenamos el array de menor a mayor a traves del metodo sort
    const arrayOrdenado = arrayFiltrado.sort((a, b) => a - b)
    if(condicion != null && condicion != undefined){
        const transformado = arrayOrdenado.join('\n')
        const transformarTxT = fs.writeFile('archivo.txt', transformado, (err) => {
            if (err) throw err });
        return transformarTxT      
    }else{
        return `ERROR!`
    }
}


