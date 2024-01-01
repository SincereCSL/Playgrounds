/// 高级类型：映射类型
interface Obj {
    a1: string;
    b1: number;
    c1: boolean;
}

// Readonly<Type>返回一个新类型，将参数类型Type的所有属性变为只读属性
type ReadonlyObj = Readonly<Obj>

// Partial<Type>返回一个新类型，将参数类型Type的所有属性变为可选属性
type PartialObj = Partial<Obj>

// Pick<Type, Keys>返回一个新的对象类型
type PickObj = Pick<Obj, 'a1' | 'b1'>

// Record<Keys, Type>返回一个对象类型
type RecordObj = Record<'x' | 'y', Obj>
