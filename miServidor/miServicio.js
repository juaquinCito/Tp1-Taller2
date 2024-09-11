import fs from "fs"
const siguienteArray = [2, 10, "a", 4, "b", 6, "d", true, "e", 9, 1, "z", 12, "r", "c", false]
const condicion = "number";

function filtrar(siguienteArray, condicion) {
    // filtramos los `numbers` y si ya estan incluidos en el array a devolver
    const arrayFiltrado = siguienteArray.filter(posicion =>
         typeof (posicion) == condicion  && !arrayFiltrado.include(posicion))
    //finalmente ordenamos el array de menor a mayor a traves del metodo sort
    const arrayOrdenado = arrayFiltrado.sort((a, b) => a - b)
    if (condicion != null && condicion != undefined) {
        const transformado = arrayOrdenado.join('\n')
        const transformarTxT = fs.writeFile('archivoArray.txt', transformado, (err) => {
            if (err) throw err
        });
    } else {
        return `ERROR!`
    }
}


