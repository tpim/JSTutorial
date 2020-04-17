var o = {
    a:1 //数值属性
}
o.b =2

Object.defineProperty(o,'c',{value:2,writable:false,enumerable:false})

console.log(Object.getOwnPropertyDescriptor(o,'a'))
console.log(Object.getOwnPropertyDescriptor(o,'b'))
console.log(Object.getOwnPropertyDescriptor(o,'c'))


//访问器属性
var o1 = {get a(){return 1}}
console.log(o1.a);
