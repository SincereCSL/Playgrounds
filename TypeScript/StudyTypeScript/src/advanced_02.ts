/// 高级类型：索引类型
// 索引类型
let tmpObj = {
    a: 1,
    b: 2,
    c: 3,
}
function getValues(obj: any, keys: string[]){
    return keys.map(key => obj[key])
}
console.log(getValues(tmpObj, ['a','b']))
// console.log(getValues(tmpObj, ['d','e']))

// keyof T 索引类型的查询操作符
interface Obj {
    a: number,
    b: string
}
let key: keyof Obj

// T[K] 索引访问操作符
let value: Obj['a']

// T extends U
function getValues2<T, k extends keyof T>(obj: T, keys: k[]): T[k][]{
    return keys.map(key => obj[key])
}
console.log(getValues2(tmpObj, ['a','b']))
