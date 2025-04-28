console.log("4.Associative array");

const todoListId_1 = crypto.randomUUID()
const todoListId_2 = 2

let todolists = [
    {
        id: todoListId_1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: todoListId_2,
        title: 'What to buy',
        filter: 'all',
    },
]

let tasks_1 = [
    { todoListId: 1, id: 11, title: 'HTML', isDone: true },
    { todoListId: 1, id: 12, title: 'CSS', isDone: false },
    { todoListId: 1, id: 13, title: 'React', isDone: true },

    { todoListId: 2, id: 21, title: 'BEER', isDone: true },
    { todoListId: 2, id: 22, title: 'Bread', isDone: true },
    { todoListId: 2, id: 23, title: 'Car', isDone: false },
]

function propName(name) {
    return `user_${name.toLowerCase()}`
}

// более удобный вид представления данных, с доступом у массиву по ключу
let tasks = {
    [todoListId_1]: [
        {  id: 11, title: 'HTML', isDone: true },
        {  id: 12, title: 'CSS', isDone: false },
        {  id: 13, title: 'React', isDone: false },
    ],
    [todoListId_2]: [
        {  id: 21, title: 'BEER', isDone: true },
        {  id: 22, title: 'Bread', isDone: true },
        {  id: 23, title: 'Car', isDone: false },
    ],
    // [10 + 10]: [],
    // [propName("BOB")]: {},
    // "22_user": 'Alex', // использование невалидного имени в назвнии ключа
    // "user accaount": '44456asE',
}


//console.log(tasks['22_user']); // обращение к значению по невалидному имени в назвнии ключа

//----------------------------------------------------------

const createTodolist = (title) => {
    const todoListId_3 = crypto.randomUUID()
    const newTodo = { id: todoListId_3, title: title, filter: 'all' }
    // const nextTodoState = [...todolists, newTodo]
    // //setTodolistState (nextTodoState)
    // const nextTasksState = {...tasks, [todoListId_3]: []}
    // //setTasks(nextTasksState)

    // либо дополнняем объект напрямую
    todolists = [...todolists, newTodo]

    tasks = {...tasks, [todoListId_3]: []}

}

createTodolist('adasdadasd')

console.log(todolists);

const changeTaskStatus = (todolistId, taskId, newStatus ) => {
    tasks = {...tasks, [todolistId]: tasks[todolistId]
        .map(t => t.id === taskId ? {...t, isDone:newStatus} : t ) } 
    console.log(tasks);
    
}

changeTaskStatus(todoListId_1, 13, true)


const map = new Map()

map.set(100, 'Стольник')
map.set(true, 555)


const key = [1,2,3,4,5]
map.set(key, key.length)

console.log(map);

//-------------------------------------------------------------------------


const set = new Set()
set.add("hi")
set.add(true)
set.add(1)

console.log(set);

const doubleArray = [1,2,1,1,1,5,5,4,8,8,8,7,9,3,3,4]

const unicValueset = new Set(doubleArray)
console.log(unicValueset);

const array = Array.from(unicValueset)
console.log(array);
