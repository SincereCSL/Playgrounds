/// 类型保护
// TypeScript 能够在特定的区块中保证变量属于某种确定的类型
// 可以在此区块中放心的引用此类型的属性，或者调用此类型的方法
enum Type {Strong, Week}

class Java {
    helloJava() {
        console.log('Hello Java')
    }
    java: any
}

class JavaScript {
    helloJavaScript(){
        console.log('Hello JavaScript')
    }
    javaScript: any
}

// 创建一个类型保护函数来判断对象的类型
function isJava(lang: Java | JavaScript): lang is Java{
    return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x: string | number){
    let lang = type === Type.Strong ? new Java() : new JavaScript()

    //使用类型函数来判断
    if(isJava(lang)){
        lang.java()
    }else{
        lang.javaScript()
    }

    // console.log(lang)
    // if((lang as Java).helloJava){
    //     (lang as Java).helloJava
    // }else{
    //     (lang as JavaScript).helloJavaScript
    // }

    // 1) instanceof 判断实例是不是属于某个类
    // if(lang instanceof Java){
    //     lang.helloJava()
    // }else{
    //     lang.helloJavaScript()
    // }

    // 2) in 判断一个属性是不是属于某个对象
    // if('java' in lang){
    //     lang.helloJava()
    // }else{
    //     lang.helloJavaScript()
    // }

    // 2) typeof 判断基本类型
    if(typeof x === 'string'){
        x.length
    }else {
        x.toFixed()
    }

    return lang
}

getLanguage(Type.Strong,1)
