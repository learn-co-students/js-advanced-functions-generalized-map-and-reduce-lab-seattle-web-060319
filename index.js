// Add your functions here
let map = (array, func) => {
    return array.map(element => func(element))
}

let reduce = (array, func, starting_point) => {   
    if(!starting_point){
        starting_point = array[0]
        array.shift()
    }
    return array.reduce(func, starting_point)
}