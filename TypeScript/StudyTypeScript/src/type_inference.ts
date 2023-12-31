/// TypeScript 类型检查机制 作用：辅助开发，提高开发效率
// 类型推断
let a = 1;
let b  = [1, null]; // 通用类型推断
let c = {x: 1, y: 'a'}
let d = (x = 1) => x + 1;

// 上下文类型推断
// window.onkeydown = (event) =>{
    // console.log(event.button) // button 不是键盘事件，属于鼠标事件
// }

// 类型断言
interface Foo {
    bar: number
}
// let foo = {} as Foo
// 声明的时候指定类型
let foo: Foo = {
    bar: 1
}
// foo.bar = 1
