/// 类 ：抽象类与多态
abstract class Animal {
    eat() {
        console.log('吃东西')
    }
    //抽象方法
    abstract sleep(): void
}
// let animal = new Animal() // 不能够实例化，只能被继承

class Cat extends Animal{
    constructor(name: string) {
        super()
        this.name = name
    }
    name: string
    run() {}
    sleep() {
        console.log('cat sleep')
    }
}
let cat = new Cat('喵喵')
cat.eat()
cat.sleep()

/// 多态

class Monkey extends Animal {
    sleep() {
        console.log('Monkey sleep')
    }
}
let monkey = new Monkey()
let animals: Animal[] = [cat,monkey]
animals.forEach(item=>{
    item.sleep()
})

/// this 类型 实现链式调用
class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}
new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
    next() {
        return this;
    }
}
new MyFlow().next().step1().next().step2()
