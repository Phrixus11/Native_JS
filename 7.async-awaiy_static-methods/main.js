console.log("7.async-awaiy_static-methods");

// console.log('start');

// async function foo() {

//     const response = await new Promise((resolve, reject) => {
//         resolve('1')
//     })
//     console.log('middle');
// }

// foo()
// .then((res)=>console.log(res))

// console.log('end');

//-----------------------------------------------------------------------------------


// лог выводится в зависимости от времини ответа 
// const yahooData = fetch('https://yahoo.com/?query=js')
// .then((res)=>{
//     console.log('1')
// })

// const bingData =  fetch('https://bing.com/?query=js')
// .then((res)=>{
//     console.log('2')
// })

// const googleData = fetch('https://google.com/?query=js')
// .then((res)=>{
//     console.log('3')
// })

//-----------------------------------------------------------------------------------


// // лог выводится последовательно
// const yahooData = fetch('https://yahoo.com/?query=js')
//     .then((res) => {
//         console.log('1')
//         return fetch('https://bing.com/?query=js')
//     })
//     .then((res) => {
//         console.log('2')
//         return fetch('https://google.com/?query=js')
//     })
//     .then((res) => {
//         console.log('3')
//     })

//-----------------------------------------------------------------------------------


// // тот же код для последовательносго вызова написанный через async await
// // await возвращает из функции респонс
// // async возвращает промис, из await надо делать return иначе респонс будет undefined
// const run = async () => {
//     console.log('4')
//     const yahooData = await fetch('https://yahoo.com/?query=js') // можно сразу подписаться на фетч через .then для преобразования данных 
//     // console.log(yahooData)
//     console.log('1')
//     const bingData = await fetch('https://bing.com/?query=js')
//     console.log('2')
//     const googleData = await fetch('https://google.com/?query=js')
//     console.log('3')
// }

// // run().then((res)=> console.log(res))

// console.log('5')

//-----------------------------------------------------------------------------------


// try catch
// const run = async () => {
//     try {

//         const yahooData = await fetch('https://yahoo.com/?query=js') 
//         // console.log(yahooData)
//         console.log('1')
//         a
//         const bingData = await fetch('https://bing.com/?query=js')
//         console.log('2')
//         const googleData = await fetch('https://google.com/?query=js')
//         console.log('3')
//     } catch (error) {
//         console.log('ошибка',error);

//     } finally {
//         console.log('finally');

//     }

// }
// run()
// console.log('end');


//-----------------------------------------------------------------------------------

// Promise.all возвращает промис, который содержил респонс с массивом респонсов
// можно обработать ошибку каждого промиса, чтобы не зареджектить весь массив промисов или использовать Promise.allSettled, но нужна проверка результата
// Promise.race возвращает первый отработанный промис из массива, с первый резолв либо реджект 
// Promise.any возвращает первый отработанный промис c резолв из массива, при этом он пропустил реджект, либо если все зареджектится будет массив ошибок
const run = async () => {
    try {

        const yahooData = fetch('https://yahoo.com/?query=js')
        const bingData = fetch('https://bing.com2/?query=js')
        const googleData = fetch('https://google.com/?query=js')


        // const results = await Promise.all([yahooData, bingData, googleData])
        // results.map(i=>console.log( i.url))

        // const results = await Promise.allSettled([yahooData, bingData, googleData])
        // console.log(results);
        

        // const results = await Promise.race([yahooData, bingData, googleData])
        // console.log(results.url)

        // const results = await Promise.any([yahooData, bingData, googleData])
        // console.log(results.url)


    } catch (error) {
        console.log('ошибка', error);
    }
}
run()

