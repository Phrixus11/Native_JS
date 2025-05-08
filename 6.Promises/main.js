console.log("6.Promises");


// let prom = new Promise((resolve, reject) => {

//     setTimeout(response => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {

//             resolve(response.data)
//             // console.log('2', prom);
//         } else {
//             reject(response.error)
//         }
//     }, 2000, { httpStatus: 200, data: { userName: 'YO', id: 'asdasd123sd', status: 'active' }, error: {} })
// })

// prom
//     .then(
//         (res) => {
//             console.log('res', res);
//             return 10 // возврат и присвоение НОВОЕМУ объекту промис примитивное значение 10 , если значение не возвращается, следующий промис выдаст значение undefined
//         },
//         () => { }
//     )
//     .then(
//         (res2) => {
//             console.log('res2', res2);
//         })

// console.log('111', prom);


// цепочка промисов
// prom
//     .then(
//         (res) => {
//             console.log('res', res);
//             return new Promise((resolve, reject) => {
//                 setTimeout(response => {
//                     if (response.httpStatus >= 200 && response.httpStatus < 400) {
//                         resolve(response.data)
//                     } else {
//                         reject(response.error)
//                     }
//                 }, 1200, { httpStatus: 200, data: { id: 'asdasd123sd', count: 'BYasdlk12321' }, error: {} })
//             })
//         },
//         () => { }
//     )
//     .then(
//         (res2) => {
//             console.log('res2', res2);
//         })



// обработка ошибок 

// let prom = new Promise((resolve, reject) => {

//     setTimeout(response => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data)
//         } else {
//             reject(response.error)
//         }
//     }, 1000, { httpStatus: 404, data: { }, error: 'not found' })
// })

// prom
//     .then(
//         (res) => {
//             console.log('res', res);
//             return new Promise((resolve, reject) => {
//                 setTimeout(response => {
//                     if (response.httpStatus >= 200 && response.httpStatus < 400) {
//                         resolve(response.data)
//                     } else {
//                         reject(response.error)
//                     }
//                 }, 2000, { httpStatus: 200, data: { id: 'asdasd123sd', count: 'BYasdlk12321' }, error: {} })
//             })
//         },
//         //второй коллбэк, обработка ошибки промиса, второй коллбэк случает ошибки, которые находятся выше по цепочке в данном случае в конструкторе промисов
//         err => {
//             console.log('err', err);
//             throw new Error('ошибка')
//         }
//     )
//     .then(
//         (res2) => {
//             console.log('res2', res2);
//         },
//         err => {
//             console.log('err', err);

//         }
//     )

//--------------------------------------------------------------------------


// let prom = new Promise((resolve, reject) => {

//     setTimeout(response => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data)
//         } else {
//             reject(response.error)
//         }
//     }, 1000, { httpStatus: 200, data: { id: 'someID' }, error: {} })
// })

// prom
//     .then(
//         (res) => {
//             console.log('res', res);
//             throw new Error('ошибка в res1')
//             return new Promise((resolve, reject) => {
//                 setTimeout(response => {
//                     if (response.httpStatus >= 200 && response.httpStatus < 400) {
//                         resolve(response.data)
//                     } else {
//                         reject(response.error)
//                     }
//                 }, 2000, { httpStatus: 200, data: { id: 'asdasd123sd', count: 'BYasdlk12321' }, error: {} })
//             })
//         },
//         //второй коллбэк, обработка ошибки промиса, второй коллбэк случает ошибки, которые находятся выше по цепочке в данном случае в конструкторе промисов
//         err => {
//             console.log('err', err);
//             throw new Error('ошибка')
//         }
//     )
//     .then(
//         (res2) => {
//             console.log('res2', res2);
//         },
//         err2 => {
//             console.log('err2 ', err2);
//         }
//     )
//     .then(null,
//         err3 => {
//             console.log('err3 ', err3);

//         }
//     )

//--------------------------------------------------------------------------

// второй коллбэк для обработки ошибков чаще всего используется в самом конце цепочки
// let prom = new Promise((resolve, reject) => {

//     setTimeout(response => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data)
//         } else {
//             reject(response.error)
//         }
//     }, 1000, { httpStatus: 200, data: { id: 'someID' }, error: {} })
// })

// prom
//     .then(
//         (res) => {
//             console.log('res', res);
//             throw new Error('ошибка в res1')
//             return new Promise((resolve, reject) => {
//                 setTimeout(response => {
//                     if (response.httpStatus >= 200 && response.httpStatus < 400) {
//                         resolve(response.data)
//                     } else {
//                         reject(response.error)
//                     }
//                 }, 2000, { httpStatus: 200, data: { id: 'asdasd123sd', count: 'BYasdlk12321' }, error: {} })
//             })
//         }
//     )
//     .then(
//         (res2) => {
//             console.log('res2', res2);
//         }
//     )
//     .then(null,
//         err3 => {
//             console.log('err3 ', err3);

//         }
//     )


//--------------------------------------------------------------------------

// мутод для обработки ошибок .catch вместо второго коллбэка у метода .then

// let prom = new Promise((resolve, reject) => {
//     setTimeout(response => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data)
//         } else {
//             reject(response.error)
//         }
//     }, 1000, { httpStatus: 200, data: { id: 'someID' }, error: {} })
// })

// prom
//     .then(
//         (res) => {
//             console.log('res', res);
//             throw new Error('ошибка в res1')
//             return new Promise((resolve, reject) => {
//                 setTimeout(response => {
//                     if (response.httpStatus >= 200 && response.httpStatus < 400) {
//                         resolve(response.data)
//                     } else {
//                         reject(response.error)
//                     }
//                 }, 2000, { httpStatus: 200, data: { id: 'asdasd123sd', count: 'BYasdlk12321' }, error: {} })
//             })
//         }
//     )
//     .then(
//         (res2) => {
//             console.log('res2', res2);
//         }
//     )
//     .catch(err3 => {
//         console.log('err3 из catch ', err3);
//     }
//     )


//--------------------------------------------------------------------------


// // пример использования fetch для создания объекта промис
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => response.json()) // обработка полученного resolved
//     .then((json) => console.log(json));


// // цепочка fetch 
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => response.json()) // обработка полученного resolved
//     .then(json => {
//         console.log(json)
//         return fetch('https://jsonplaceholder.typicode.com/posts')

//     })
//     .then((response) => response.json())
//     .then((json) => console.log(json)); 


//--------------------------------------------------------------------------


// let prom = new Promise((resolve, reject) => {
//     setTimeout(response => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data)
//         } else {
//             reject(response.error)
//         }
//     }, 1000, { httpStatus: 200, data: { id: 'someID' }, error: {} })
// })

// prom
//     .then(console.log)

//----------------------------------------------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ id: 'asd' })
//     }, 2000)

// })



// const promise = new Promise((resolve, reject) => {
//     readFile('./main.js', (err, data) => { // readFile из библиотеки nodeJs
//         if (err) {
//             reject(err)
//         } else {
//             resolve(data)
//         }
//     })

// })


// console.log('promise', promise);

// const promise2 = promise
//     .then((data) => {
//         // console.log(data);
//         return 'new promise'
//     })



// promise2
// .then((data)=>{
//     // console.log(data);

// })

// console.log('promise2', promise2);


// создание своего ассинхронного аналога fetch для чтения файлов 
// const readFilepromise = (path) => { 
//     return new Promise((resolve, reject) => {
//             readFile(path, (err, data) => { // readFile из библиотеки nodeJs
//                 if (err) {
//                     reject(err)
//                 } else {
//                     resolve(data)
//                 }
//             })

//         })
// }

//можно выйти через ретурн из ветки then и catch

// readFilepromise('.index.js').then((data)=>{
//         // console.log(data);
//         return readFilepromise('.index.js')
//     })
//     .then((data)=>{
//         // console.log(data);
//         return readFilepromise('.index.js')
//     })
//     .catch((err) => {
//         // console.log(err);
//         return readFilepromise('.index.js') // выход из reject
//     })


// const getData = () =>
//     new Promise((res, rej) => {
//         setTimeout(() => {
//             res('some data');
//             // rej("some error");
//         }, 1000);
//     });

// getData()
//     .then((data) => {
//         console.log("then1", data);
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 // res("some data from request2");
//                 rej("some error");
//             }, 2000);
//         });
//     })
//     .then((data) => {
//         console.log("then2", data);
//         return 20;
//     })
//     .catch((data) => {
//         console.log("catch1", data);
//         // return;
//     })
//     .then((data) => {
//         console.log("then3", data);
//         return b;
//     })
//     .then((data) => {
//         console.log("then4", data);
//         return 40;
//     })
//     .catch((data) => {
//         s
//         return 10;
//     })
//     .finally((data) => {
//         console.log("finally", data);
//         return 60;
//     })
//     .then((data) => {
//         console.log("then5", data);
//     })
//     .catch((data) => {
//         console.log("catch2", data);
//         return 50;
//     })

const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        // res("reject1");
        rej("reject1");
    }, 1000);
});


// promise1
//     .catch((t) => t + "catch1")
//     .catch((t) => t + "catch2")
//     .then((t) => t + "then1")
//     .finally((t) => t + "finally")
//     .then((t) => console.log(t)); /// ??

//     console.log('reject1 + catch1 + then1');


    promise1
    .catch((t) => {

    })
    .then((t) => {
        console.log('then',t)
    });


