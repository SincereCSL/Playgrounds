/// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'
// str  = 123

/// 数组
let arr1: number[] = [1,2,3]
let arr2: Array<number> = [1,2,3]
// 数组：联合类型
let arr3: Array<number | string> = [1,2,3,'4']

/// 元组
let tuple: [number,string] = [0,'1']
/***
 可以给元组添加新元素，但是不能越界访问
 ***/
// tuple.push(2)
// console.log(tuple)
// tuple[2]


/// 函数
/***
 函数返回值类型可以省略
 ***/
let add = (x: number, y: number) => x + y
let computer:(x: number,y: number) => number
computer = (a, b) => a + b;

/// 对象
let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 3

/// symbol 具有唯一的值
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2)

/// undefined, null
let un: undefined = undefined
let nu: null= null
num = null

/// void 没有任何返回值的类型
let noReturn  =()=>{}

/// any
let x;
x = 1

/// never 永远不会有返回值
let error = () =>{
    throw new Error('error')
}

//死循环函数
let endless = () => {
    while (true) {}
}





