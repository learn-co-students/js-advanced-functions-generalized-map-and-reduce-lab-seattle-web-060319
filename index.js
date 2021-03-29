// Add your functions here
function map(array, fn) {
  return array.map(fn);
}

function reduce(array, fn, startingValue) {
  if (!!startingValue == false) {
    startingValue = array.shift();
  };

  return array.reduce(fn, startingValue);
}
