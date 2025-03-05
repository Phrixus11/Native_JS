console.log("1.Object_array_destructuring");
const arr = [1, 2, 3, 4, 5]
// const length_1 = arr.length
// arr.push(6)

// console.log( arr)

// const length_2 = arr.length

// console.log(length_1 !== length_2);

// // 1
// arr.splice(2, 1, 10)
// // 2
// arr[2] = 11
// console.log( arr)

// 

const arr2 = [...arr, 6]
// const arr2 = [6, ...arr] // либо добавление нового элемента в начало 
// arr2.push(10) // можно добавить через методы после копирования
console.log(arr)
console.log(arr2)
console.log(arr2 === arr)

// создание копии => вносим в неё изменения => используем копию в дальнейшем

const user = {
    name: "Bob",
    age: 32,            // => 33
    isStudent: false,
}

const copyUser = { ...user, age: 33 } // создаем копию

console.log(copyUser);



const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
    },
]

// поверхностная копия

const copyUsers = [...users] // создание нового массива, но не создание новых объектов


console.log(copyUsers === users);
console.log(copyUsers[0] === users[0]);

// полная или глубокая копия 

const fullCopyUser = structuredClone(users)

console.log(fullCopyUser === users);
console.log(fullCopyUser[0] === users[0]);


// C-R-U-D

// create
const newUser = {
    id: 5,
    name: 'Dimych',
    isStudent: true,
}

const newUsers = [...users, newUser]

// update id = 1 'Bob' => 'Elvin'
const newUsers2 = users.map(user => user.id === 1 ? {...user, name: 'Elvin'} : user)

// delete id = 1

const newUsers3 = users.filter(user => user.id !== 1)

// Деструктурирующее присванивание 

const number = [1,2,3,4,5]
// const num1 = number[0]
// const num2 = number[1]
// const num3 = number[2]

const [num1, num2, num3] = number
const [n1, n2, ...array] = number

console.log(array);


function getArray(...rest) {
    return rest
}

const [a1, a2, ...rest] = getArray(1,2,3,4)

console.log(rest);
