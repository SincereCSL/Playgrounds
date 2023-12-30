/// 类 ：继承和成员修饰符
class Dog {
    constructor(name: string) {
        this.name = name
    }
    // protected  constructor(name: string) { //这个类不能被实例化，只能被继承
    //     this.name = name
    // }
    name: string
    run() {}
    protected  pro() {} //受保护成员，只能在类和子类中访问，不能在类的实例中访问
    readonly legs: number = 4
    static  food: string = 'bones' // 类的静态成员，只能通过类名调用，不能通过实例调用
}

console.log(Dog.prototype)
let dog = new Dog('tiny')
console.log(dog)
// dog.pro() // 受保护成员，只能在类和子类中访问，不能在类的实例中访问
console.log(Dog.food)

// 类：类的继承
class  Husky extends Dog {
    constructor(name: string, public color: string){
        super(name)
        this.color = color
        this.pro() // 受保护成员子类中可以访问

    }
    // color: string
}
console.log(Husky.food) //类的静态成员可以被继承，子类调用

/// 类： 类的成员修饰符
// public
class Dog2 {
    constructor(name: string) {
        this.name = name
    }
    public name: string
    run() {}
}
// private 只能类本身调用，不能被类的实例调用，也不能被类的子类调用
class Dog3 {
    constructor(name: string) {
        this.name = name
    }
    public name: string
    run() {}
    private pri(){}
}
let dog3 = new Dog3('test')
// dog3.pri() // 不能被类的实例调用

class  TestDog3 extends Dog3 {
    constructor(name: string, color: string){
        super(name)
        this.color = color
        // this.pri() // 不能被子类调用
    }
    color: string
}
