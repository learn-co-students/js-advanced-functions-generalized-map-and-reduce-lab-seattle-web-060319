// Add your functions here
function map(arr, blk) {
    return arr.map(blk)
}

function reduce(arr, fx, start) {
    if (!!start == false) {
        start = arr.shift()
    } else {
        start = start
    }
    return arr.reduce(fx, start)
}