console.log("8.JS Asynchronous-Eventloop-Micro-Macro-queues");

// console.log('a')

// setTimeout(function () {
//     console.log('timeout')
// }, 1000)

// console.log('b')

// console.log('c')

// a b c timeout

// -----------------------------------------------------------------------------

// console.log(1)

// setTimeout(function firstFN() {
//     console.log(2)
// }, 8000)

// setTimeout(function secondFN() {
//     console.log(3)
// }, 4000)

// setTimeout(function thirdFN() {
//     console.log(4)
// }, 3000)

// console.log(5)

// 1 5 4 3 2

// -----------------------------------------------------------------------------

// setTimeout(function () {
//     console.log(1)
//   }, 1000)

//   setTimeout(function () {
//     console.log(2)
//   }, 1000)

//   setTimeout(function () {
//     console.log(3)
//   }, 1000)

//   setTimeout(function () {
//     console.log(4)
//   }, 1000)



// -----------------------------------------------------------------------------

// function a() {
//     setTimeout(() => {
//         console.log('a')
//     })
// }
// function b() {
//     console.log('b')
// }

// a()

// new Promise(function (res, rej) {
//     console.log('create promise')
//     res()
// }).then(() => {
//     setTimeout(function timer() {
//         console.log('timeout')
//     }, 0)
// })

// b()

// create promise d a timeout

// -----------------------------------------------------------------------------

// console.log(1)

// setTimeout(() => {
//     console.log(2)
//     Promise.resolve().then(() => {
//         console.log(3)
//     })
// })

// new Promise((res, rej) => {
//     console.log(4)
//     res(5)
// }).then(data => {
//     console.log(data)

//     Promise.resolve()
//         .then(() => {
//             console.log(6)
//         })
//         .then(() => {
//             console.log(7)

//             setTimeout(() => {
//                 console.log(8)
//             }, 0)
//         })
// })

// setTimeout(() => {
//     console.log(9)
// })

// console.log(10)

// 1 4 10 5 6 7 2 3 9 8

// -----------------------------------------------------------------------------

// setTimeout(() => {
//     console.log('1')
// }, 0)

// setTimeout(() => {
//     console.log('2')
// }, 1000)

// new Promise(function (res, rej) {
//     console.log('3')
//     res()
//     console.log('4')
// }).then(() => {
//     console.log('5')
// })

// console.log('6')

// async function test1() {
//     console.log('7')
//     await test2().then(()=> console.log('then'))
//     console.log('8')
// }

// async function test2() {
//     console.log('9')
// }

// test1()

// console.log('10')

// 3 4 6 7 9 10 5 then 8 1 2 

// -----------------------------------------------------------------------------

// async function first() {
//     console.log(9)
//     await Promise.resolve(2)
//     console.log(0)
//     await Promise.resolve(3).then(r => console.log(r))
// }

// async function second() {
//     console.log(10)
//     await Promise.resolve(4)
//     console.log(11)
//     await Promise.resolve(5).then(r => console.log(r))
// }

// first()
// second()

// const promises = Promise.resolve('new Promise')
// promises.then(str => console.log(str))

// 9 10 2 4  new Promise 0 11 3 5 

// -----------------------------------------------------------------------------

