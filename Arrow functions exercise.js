function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

//ES2015 Arrow function shorthand

const double = (arr) => arr.map( (val) => val * 2);

//Replace ALL functions with arrow functions

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

//Solution

//Rest/Spread Operator Exercises

const filterOutOdds = (arguments) => {
    var nums = [...arguments]
    return nums.filter(function(num) {
      return num % 2 === 0
    });
}

//findMin

const findMin = (...arguments) =>{ 
    return Math.min(...arguments)
}

//Merge objects

const mergeObjects = (obj1, obj2) => {
    return ({...obj1, ...obj2})
}

//doubleAndReturnArgs

const doubleAndReturnArgs = (arr, ...args) =>{
    args = args.map((arg) => arg*2)
    return ([...arr, ...args])
}

//Slice and dice

const removeRandom = (items) => {
    items2 = [...items]
    items2.splice([Math.floor(items2.length * Math.random())], 1)
    return (items2)
}

const extend = (array1, array2) => {
    array1Copy = [...array1]
    array2Copy = [...array2]
    return ([...array1Copy, ...array2Copy])
}

const addKeyVal = (obj, key, val) => {
    newObj = {...obj}
    newObj[key] = val
    return newObj
}

const removeKey = (obj, key) => {
    newObj = {...obj}
    delete newObj[key]
    return newObj
}

const combine = (obj1, obj2) => {
    newObj1 = {...obj1}
    newObj2 = {...obj2}
    return ({...newObj1, ...newObj2})
}

const update = (obj, key, val) => {
    newObj = {...obj}
    newObj[key] = val
    return newObj
}