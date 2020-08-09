// Add your functions here


function map(array, mapFunction) {
  return array.map(mapFunction);
}


function reduce(array, reduceFunction, startingPoint) {
  if(!!startingPoint == false) {
    startingPoint = array.shift();
  }
  return array.reduce(reduceFunction, startingPoint);
}
