interface List {
    readonly id: number; //readonly 只读属性
    name: string;
    // [x: string]:any; // 字符串索引签名
    age?:number // ?可选属性

}

interface Result {
    data: List[]
}

function reder(result: Result){
    result.data.forEach((value, index, array)=>{
        console.log(value.id,value.name)
        if(value.age){
            console.log(value.age)
        }
    })
}
let result = {
    data: [
        {id:1,name:'A',sex:'male'},// 鸭式辨型法 或 结构性子类型化
        {id:1,name:'B',age:10},
    ]
}
reder(result)

// 建议使用这一种
reder({
    data: [
        {id:1,name:'A',sex:'male'},// 鸭式辨型法 或 结构性子类型化
        {id:1,name:'B'},
    ]
} as Result) // 类型断言方式

//类型断言方式简写 - 这种写法在React中会产歧义
reder(<Result>{
    data: [
        {id:1,name:'A',sex:'male'},// 鸭式辨型法 或 结构性子类型化
        {id:1,name:'B'},
    ]
}) // 类型断言方式


/// 数字索引的接口
interface StringArray {
    [index: number]: string
}
let chars: StringArray = ['A','B']

/// 字符串索引接口
interface Names {
    [x: string]: string;
    // y:number
    [z: number]: string
}
