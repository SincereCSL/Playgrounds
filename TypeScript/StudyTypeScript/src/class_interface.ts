/// 类与接口的关系
interface Human {
    //接口也不能约束类的构造函数
    // new (name: string): void;
    name: string;
    eat(): void;
}

class Asian implements Human{
    constructor(name: string) {
        this.name  = name
    }
    // 接口只能约束类的公有成员
    name: string;
    // private name: string;
    eat() {}
    sleep() {}
}

/// 接口的继承：一个接口可以继承多个接口
interface Man extends Human {
    run(): void
}

interface Child {
    cry():void
}

interface Boy extends Man,Child {}

let boy: Boy = {
    name: '',
    run() {},
    eat() {},
    cry() {}
}

/// 接口继承类

class Auto {
    state = 1
    // private state2 = 0
}
interface  AutoInterface extends Auto {

}
class C implements AutoInterface {
    state = 1
}
class Bus extends Auto implements AutoInterface{

}
