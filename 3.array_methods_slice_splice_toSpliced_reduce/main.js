console.log("3.Array Methods: slice, splice, toSpliced, reduce.");

const arr = [1, 2, 3, 4, 5]

console.log('includes')
console.log(arr.includes(7));
console.log(arr.includes(5));

function newIncludes(array, el) {
    for (const element of array) {
        if (element === el) {
            return true
        }
    }
    return false

}

console.log('newIncludes')
console.log(newIncludes(arr, 7));
console.log(newIncludes(arr, 5));

//---------------------------------------------------------------------------------------------

const newIndexOf = (array, el) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === el) {
            return i
        }

    }
    return -1
}

console.log('newIncludes')
console.log(newIndexOf(arr, 7));
console.log(newIndexOf(arr, 5));

//---------------------------------------------------------------------------------------------

const newSlice = (array, start = 0, end = array.length) => {
    let newArr = []
    //инвертировать отрицательное значение start
    if (start < 0) {
        start = array.length + start
    }
    if (end < 0) {
        end = array.length + end
    }

    let indexForNewArr = 0

    for (let i = start; i < end; i++) {
        // newArr.push(array[i])
        newArr[indexForNewArr] = array[i]
        indexForNewArr++
    }
    return newArr
}

console.log('Slice')
console.log(arr.slice(-2));
console.log(arr.slice(-3, -1));


console.log('newSlice')
console.log(newSlice(arr, 1, 3));
console.log(newSlice(arr, -2));
console.log(newSlice(arr, -3, -1));

//----------------------------------------------------------------------------------------------

const newSplice = (array, startDel, howMuchDel = array.length - 1, ...rest) => {
    //инвертировать отрицательное значение startDel
    if (startDel < 0) {
        startDel = array.length + startDel
    }

    //сохранить исходную длину массива для корректировки финальной длины 
    let tempArrLenght = array.length

    //отделить вторую часть массива
    let tempArr = []
    for (let i = startDel + howMuchDel; i < array.length; i++) {
        tempArr.push(array[i])
    }

    //вынести удаленные элементы в отдельный массив
    let deletedArr = []
    for (let i = startDel; i < howMuchDel + startDel; i++) {
        deletedArr.push(array[i])
    }

    //добавить к массиву элементы rest
    let indexRest = 0
    for (let i = startDel; i <= startDel + rest.length; i++) {
        array[i] = rest[indexRest]
        indexRest++
    }

    //добавить к массиву временный массив
    let newIndexArr = startDel + rest.length
    for (let i = 0; i < tempArr.length; i++) {
        array[newIndexArr] = tempArr[i]
        newIndexArr++
    }

    //корректировка длины массива
    array.length = tempArrLenght - howMuchDel + rest.length
    return deletedArr
}

let arrForSlice = [1, 2, 3, 4, 5]

console.log('Splice')
console.log(arrForSlice.splice(1, 2));
console.log('измененный массив', arrForSlice);


let arrForNewSlice = [1, 2, 3, 4, 5]
console.log('newSplice')
console.log('исходный массив', arrForNewSlice);

// console.log(newSplice(arrForNewSlice,5,0,10,11,12,13));
console.log(newSplice(arrForNewSlice, 1, 2));
console.log('измененный массив', arrForNewSlice);


//----------------------------------------------------------------------------------------------


function newFind(arr, callback) {
    for (const element of arr) {
        if (callback(element)) {
            return element
        }
    }
}

console.log('Метод .find')
console.log(arr.find(el => el > 2));
console.log('Метод .myFind')
console.log(newFind(arr, e => e > 2));


//----------------------------------------------------------------------------------------------


function newFilter(array, callback) {
    let resultArray = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            resultArray.push(array[i])
        }
    }
    return resultArray
}

console.log('Метод filter')
console.log(arr.filter(el => el % 2));
console.log('Метод .myFilter')
console.log(newFilter(arr, e => e % 2));


//----------------------------------------------------------------------------------------------

function myMap(arr, callback) {
    let resultArray = []
    for (const element of arr) {
        resultArray.push(callback(element))
    }
    return resultArray
}

console.log('Метод map')
console.log(arr.map(el => el * el));
console.log('Метод myMap')
console.log(myMap(arr, e => e * e));



//----------------------------------------------------------------------------------------------


let number = [2, 4, 5, 6, 8, 525, 41, 44, 55, 66, 55, 55, 44, 44, 44, 44, 78]
console.log('Метод reduce')
console.log(number.reduce((acc, el) => acc + el));

console.log(number.reduce((acc, el) => {
    if (acc[el]) {
        acc[el]++
    } else {
        acc[el] = 1
    }
    return acc
},
    {}));

// console.log(number.reduce((acc,el)=>{
//     if (el%2 === 0) {
//         acc.push(el)
//     }
//     return acc
// },[]));

console.log(number.reduce((acc, el) => {
    if (acc < el) {
        return el

    }
    return acc
}));

//----------------------------------------------------------------------------------------------



// C-create =>
// R-read   =>
// U-update =>
// D-delete =>

//----------------------------------------------------------------------------------------------


function myIndexOf(arr, el) {
    for (const [index, value] of arr.entries()) {
        if (value === el) {
            return index
        }
    }
    return -1
}