/// 泛型： 泛型类与泛型约束
/// 泛型类
class Log<T> {
    // static run(value: T) { // 泛型不能用于类的静态成员
     run(value: T) {
        console.log(value)
        return value
    }
}

// let log1 = new Log<number>()
// log1.run(1)
// 不指定类型参数
// let log2 = new Log()
// log2.run({a:1})
let log2 = new Log<any>()
log2.run({a:1})


/// 泛型约束
//定义一个接口
interface  Length {
    length: number
}
function log3<T extends Length>(value: T): T{
    console.log(value,value.length)
    return value
}
log3([1,2])
log3('str')
log3({length: 1})

///泛型的好处：
// 1、函数和类可以轻松地支持多种类型，增强程序的扩展性
// 2、不必谢多条函数重载，冗长地联合类型声明，增强代码的可读性
// 3、灵活控制类型之间的约束
