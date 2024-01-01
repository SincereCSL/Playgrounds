/// 高级类型： 交叉类型与联合类型

/// 交叉类型 将多个类型组成一个新类型，使用符号 & 表示，取所有类型的并集
interface DogInterface {
    run(): void
}
interface CatInterface {
    jump(): void
}

let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
}

// 联合类型 指多个类型组成一个新类型，使用符号 ｜ 表示
let aaa: number | string = 'a'
// 字面量类型
let bbb: 'a' | 'b' | 'c'
let ccc: 1 | 2 | 3

/// 联合类型  取所有类型的交集
// 联合类型
class DogA implements  DogInterface {
    run() {}
    eat() {}
}
class CatA implements CatInterface {
    jump() {}
    eat() {}
}
enum Master { Boy, Girl}
function getPet(master: Master){
    let pet = master === Master.Boy ? new DogA() :new CatA();
    pet.eat();
    // pet.run();
    return pet
}

// 可区分的联合类型  (结合了联合类型和字面量类型保护方法)

interface Square {
    kind: "square",
    size: number
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number
}

interface Circle {
    kind: 'circle',
    r: number
}

type Shape = Square | Rectangle | Circle
function area(s: Shape){ // 利用两种类型的共有属性来创建不同的类型保护区块
    switch (s.kind){
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width
        case  "circle":
            return Math.PI * s.r ** 2
        default:
            return ((e: never) => {throw new Error(e)})(s)
    }
}

console.log(area({kind: 'circle',r: 1}))
