 // let add2: (x: number, y: number ) => number

 /// 接口定义函数
 interface func {
     (x: number, y: number): number
 }

 /// 类型别名定义
 type func2 = (x: number, y: number) => number

 let count: func2 = (a, b) => a + b

 /// 混合类型接口
 interface Lib {
     (): void;
     version: string;
     doSomething(): void;
 }
  function getLib(){
      let lib: Lib = (() => {})as Lib
      lib.version = '1.0';
      lib.doSomething = () => {}
      return lib;
  }
  let lib1 = getLib()
 lib1()
 lib1.doSomething()
 let lib2 = getLib() //创建一个实例
