// Add your functions here
function map(array, map){
    return array.map(map)
}
function reduce(array, reduceFunction, starting){
    if (!!starting == false){
        starting = array.shift()
    }
    return array.reduce(reduceFunction, starting)
}