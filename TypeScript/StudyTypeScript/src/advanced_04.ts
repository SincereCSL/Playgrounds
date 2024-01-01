/// 高级类型：条件类型
// T extends U ? X : Y  // 如果类型 T 可以被赋值给类型 U 结果类型就是 X类型 否则是 Y类型

// 条件类型(嵌套)
type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

// eg：
type T1 = TypeName<string> // string
type T2 = TypeName<string[]> // object

// 分布式条件类型
// (A | B) extends U ? X : Y
// ( A extends U ? X : Y) | ( B extends U ? X : Y)
// eg：
type T3 = TypeName<string | string[]> //  string obj

// 利用分布式条件类型实现类型的过滤
type Diff<T, U> = T extends U ? never : T // Exclude<T, U>
//eg:
type T4 = Diff<'a' | 'b' | 'c', "a" | 'e'>
// Diff<'a', 'a' | 'e'> | Diff<'b', 'a' | 'e'> | Diff<'c', 'a' | 'e'>
// never | 'b' | 'c'
// 'b' | 'c'

type NotNull<T> = Diff<T, undefined | null> // NonNullable<T>
type T5 = NotNull<string | number | undefined | null>

// 内置类型
// Exclude<T, U>
// NonNullable<T>

// Extract<T, U> // 与Exclude相反
// eg:
type T6 = Extract<'a' | 'b' | 'c', 'a' | 'e'>

// ReturnType 提取函数类型Type的返回值类型，作为一个新类型返回
type T7 = ReturnType<()=> string>
