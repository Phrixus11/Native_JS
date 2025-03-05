console.log("2.Array Methods");

const array = [1, 2, 3, 4, 5]

let result = array.push(6)
//console.log(result);

function newPush(array, a) {
    array[array.length] = a
    return array.length
}

// console.log(newPush(array, 5));


function newPush2(array, ...rest) {
    console.log(rest);

    for (const element of rest) {
        array[array.length] = element
    }

    return array.length
}

// function newPush2(array, ...elements) {
//     for (let i = 0; i < elements.length; i++) {
//         array[array.length] = elements[i];

//     }
//     return array.length
// }


// console.log(newPush2(array, 4, 2, 3, 4, 5));

function newPush3(array, ...rest) {
    let arr = [...arguments]
    // let arr = Array.from(arguments)
    // console.log(arr);
    for (let i = 1; i < arguments.length; i++) {
        array[array.length] = arguments[i];
    }

    return array.length
}


// console.log(newPush3(array, 4, 2, 3, 4, 5));

array.pop()


function newPop(arr) {
    const lastEl = arr[arr.length - 1]
    arr.length = arr.length - 1
    return lastEl

}
// console.log(array)
// console.log(newPop(array));


function newShift(arr) {
    const firstEl = arr[0]
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i + 1];
    }
    arr.length = arr.length - 1
    return firstEl
}
// newShift(array)
// console.log(array)

function newUnshift(arr, ...rest) {
    let length = array.length
    arr.length = arr.length + rest.length
    for (let i = length - 1; i >= 0; i--) {
        arr[i + rest.length] = arr[i]

    }
    for (let i = 0; i < rest.length; i++) {
        arr[i] = rest[i]
    }

    return array.length
}



// function newUnshift(array, ...elements) {
//     const length = array.length
//     array.length = array.length + elements.length
//     for (let i = length - 1; i >= 0; i--) {
//         array[i + elements.length] = array[i];
//     }
//     for (let i = 0; i < elements.length; i++) {
//         array[i] = elements[i];
//     }
//     return array.length
// }

// let arr2 = [1, 2, 3]
// newUnshift(arr2, 4, 5, 6)
// console.log(arr2)


// function newRevers(arr) {
//     // let arr2 = [...arr]
//     let arr2 = []
//     for (let i = 0; i < arr.length; i++) {
//         arr2[i] = array[i];
        
//     }
//     for (let i = 0; i < arr.length; i++) {
//         arr[arr2.length-1-i] = arr2[i]
//     }
//     return array
// }


function newRevers(arr) {

    for (let i = 0; i < arr.length/2; i++) {
        let temp = arr[arr.length-1-i]
        arr[arr.length-1-i] = arr[i]
        arr[i] = temp
    }

    return arr
}

let arr2 = [1, 2, 3, 4, 5]
// console.log(newRevers(arr2));

// function newConcat(array, ...rest) {

//     function pushElement(array, el) {
//         array[array.length] = el;
//         return array.length
//     }
//     function pushArray(startArray, array) {
//         for (let i = 0; i < array.length; i++) {
//             startArray[startArray.length] = array[i];
//         }
//         return startArray.length
//     }

//     const result = []
//     pushArray(result, array)

//     for (let i = 0; i < rest.length; i++) {
//         if (Array.isArray(rest[i])) {
//             pushArray(result, rest[i])
//         } else {
//             pushElement(result, rest[i]);
//         }
//     }
//     return result
// }



function newConcat(array, ...elements) {

    let result = []
    for (let i = 0; i < array.length; i++) {
        result[result.length] = array[i];
        
    }

    function newPushArra(array) {
        for (let i = 0; i < array.length; i++) {
            if(Array.isArray( array[i])) {
                newPushArra(array[i])
            } else {
            result[result.length] = array[i];
            }
        }
    }
    for (let i = 0; i < elements.length; i++) {
        if(Array.isArray( elements[i])) {
            newPushArra(elements[i])
        } else {
        result[result.length] = elements[i];
        }
    }
    return result
}

console.log(newConcat(0,[7,8,9],7,8,9, [1,2,3,[4,5,6]]));

