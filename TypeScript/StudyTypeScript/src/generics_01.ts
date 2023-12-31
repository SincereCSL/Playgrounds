/// 泛型：泛型函数与泛型接口
function log<T>(value: T): T{
    console.log(value);
    return value;
}
///调用方式
// log<string[]>(['a','b'])
log(['a','b'])

/// 泛型定义一个函数类型
// type Log= <T>(value: T) => T
// let myLog: Log = log

/// 泛型接口
// interface Log {
//     <T>(value: T): T
// }


// interface Log<T> {
//     (value: T): T
// }
// let myLog: Log<number> = log
// myLog(1)

// 指定一个默认的类型
interface Log<T = string> {
    (value: T): T
}
let myLog: <T>(value: T) => T = log
myLog('a')





