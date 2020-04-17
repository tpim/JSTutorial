
//使用原型表示对象

var cat = {
    say(){
        console.log("meow~");
    },
    jump(){
        console.log("jump");
        
    }
}

var tiger = Object.create(cat,{

    say:{
        writable:true,
        configurable:true,
        enumerable:true,
        value:function(){
            console.log("roar!");
            
        }
    }

})

var anotherCat = Object.create(cat)

anotherCat.say()


var anotherTiger = Object.create(tiger)

anotherTiger.say()

//使用 Class 表示对象

var o = new Object;
var n = new Number;


console.log([o,n].map(v => Object.prototype.toString.call(v)))



var o = {[Symbol.toStringTag]:"MyObject"}
console.log(o + "");
