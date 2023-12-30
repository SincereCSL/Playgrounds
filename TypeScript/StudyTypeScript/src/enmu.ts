/// 数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
console.log(Role.Reporter)
console.log(Role)

/// 字符串枚举
enum Message {
    Success = '加油，成功啦',
    Fail = '抱歉哦，失败了'
}

/// 异构枚举 (数字枚举与字符串枚举混用) 不建议使用
enum Answer {
    N,
    Y = 'Yes'
}

/// 枚举成员
// Role.Reporter = 2 //不能修改枚举类型的值

enum  Char {
    // Const  常量枚举
    a, //没有初始值
    b = Char.a, //对已有枚举类型的引用
    C = 1 + 3, //常量的表达式

    // Computed  //计算枚举
    d = Math.random(),
    e = '123'.length
}


/// 常量枚举
const enum Month {
    Jan,
    Feb,
    Mar,
}
// eg:
let month = [Month.Jan,Month.Feb,Month.Mar]

/// 枚举类型
enum E { a, b} // 没有初始值
enum F { a = 0, b = 1} // 数字枚举
enum G { a = 'apple',b = 'banana' } // 字符串枚举

let e: E = 3
let f: F = 3
//两种不同类型的枚举不能进行比较
// e === f

let e1: E.a = 1
let e2: E.b
// 不能比较
// e1 === e2
let e3: E.a = 1
//可以比较
// e1 === e3

let g1: G = G.b
let g2: G.a = G.a
