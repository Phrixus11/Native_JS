console.log("5.Lexical Environment, Closure, Recursion.Associative array");


//надо написать функцию мемозации memoize, которая принимает функцию вызов которой надо замемоизировать.
// Если функция которую мы мемоизируем вызывается повторно с одним и тем же аргументом то вычисление не происходит
// а сразу же возвращается результат (из кэша)



const sqr = (num) => {
    //тяжелые вычисления
    let result = num 
    for (let i = 0; i < 1000000000; i++) {
        result++
    }
    console.log('result');
    
    return result
}

const memoize = function (foo) {
    let cache = new Map
    function setCache(num) {
        if (!cache.has(num)){
            let result = foo(num)
            cache.set(num, result)
            return result
        } else {
            return cache.get(num)
        }
    }
    return setCache
}

let memoizedSqr = memoize(sqr);



// console.log(memoizedSqr(5)) // calculation
// console.log(memoizedSqr(7)) // calculation
// console.log(memoizedSqr(6)) // calculation
// console.log(memoizedSqr(5)) // from cache
// console.log(memoizedSqr(7)) // from cache
// console.log(memoizedSqr(6)) // from cache

