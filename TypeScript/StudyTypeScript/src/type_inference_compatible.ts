/// 类型兼容性
// 当一个类型Y可以赋值给另一个类型X时，我们就可以说类型X兼容类型Y
// X兼容Y : X(目标类型) = Y(源类型)

/***
    结构之间兼容： 成员少的兼容成员多的
    函数之间兼容： 参数多的兼容参数少的
 ***/

// let s: string = 'a'
// s = null

/***
 类型兼容性问题：
    TS 允许把类型不同的变量相互赋值，某种程度上产生不可靠行为，但增加了语言的灵活性
    类型兼容性的例子广泛存在于接口、函数、类中
 ***/

// 接口兼容性
interface Tom {
    a: any;
    b: any;
}
interface Jerry {
    a: any;
    b: any;
    c: any;
}
let tom: Tom = {a: 1, b: 2}
let jerry: Jerry = {a: 1, b: 2, c: 3} // 源类型必须具备目标类型的必要属性就可以进行赋值（接口之间相互兼容，成员少地会兼容成员多的）
tom  = jerry // 可以赋值  鸭式辨型法
// jerry = tom // 不能赋值

/// 函数的兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler){
    return handler
}
// 1) 参数的个数：目标函数的参数个数多于源函数的参数个数
let handler1 = (a: number) =>{}
hof(handler1)
let handler2 = (a: number,b: number, c: number) =>{}
// hof(handler2)

// 可选参数和剩余参数
let a1 = (p1: number, p2: number) => {}
let b1= (p1?: number, p2?: number) =>{}
let c1 = (...args: number[]) => {}
/*** 1.1. 固定参数可以兼容可选参数和剩余参数 ***/
// a1  = b1
// a1  = c1
/***1.2. 可选参数不兼容固定参数和剩余参数 ***/
b1 = c1
b1 = a1
/***1.3. 剩余参数兼容容固定参数和可选参数 ***/
c1 =a1
c1 =b1

// 2) 参数类型
let handler3 = (a: string) => {}
// hof(handler3)

interface Point3D {
    x: number;
    y: number;
    z: number
}
interface Point2D {
    x: number;
    y: number;
}
let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}
p3d = p2d // 可以兼容 （成员个数多地可以兼容成员个数少的）
// p2d = p3d // 不兼容

// 3) 返回值类型：目标函数返回值类型必须与源函数返回值类型相同，或者为其子类型
let ff = () => ({name: 'tom'})
let gg = () =>({name: 'tom', location: 'Beijing'})
ff = gg // 可以兼容
// gg = ff // 不兼容

// 函数重载
 function overload(a: number, b: number): number;
 function overload(a: string, b: string): string;
 function overload(a: any, b: any): any {};

 // function overload(a: any):any {}; // 不兼容
// function overload(a: any, b: any, c: any): any {}; // 不兼容
// function overload(a: any, b: any){}; // 不兼容


// 枚举兼容性
enum Fruit {Apple,Banana}
enum Color {Red,Yellow}
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
// let color: Color.Red = Fruit.Apple // 不兼容

// 类兼容性
class AA {
    constructor(p: number, q: number) {}
    id: number = 1
    private name: string = '' // 含有私有成员就不兼容了
}
class BB {
    static s = 1
    constructor(p: number) {}
    id: number = 2
    private name: string = ''// 含有私有成员就不兼容了
}
let aa = new AA(1,2)
let bb  = new BB(1)
// aa = bb // 兼容
// bb = aa // 兼容
class CC extends AA {}
let cc = new CC(1,2)
aa = cc // 父类和子类是兼容的
cc = aa // 父类和子类是兼容的


// 泛型兼容性
interface Empty<T> {
    //没有任何成员 兼容
    //有成员情况   不兼容
    // value: T
}
let obj1: Empty<number> = {}
let obj2: Empty<string> = {}
obj1 = obj2 // 兼容
obj2 = obj1 // 兼容

// 泛型函数
let test1 = <T>(x: T): T => {
    console.log('x')
    return x
}
let test2 = <U>(y: U): U => {
    console.log('y')
    return y
}
test1 = test2 // 如果两个泛型函数定义相同但是没有指定类型参数泛型函数是互相兼容的
