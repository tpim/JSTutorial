function c1(){
    this.p1 = 1;
    this.p2 = function(){
        console.log(this.p1);
        
    }
}


var o1 = new c1;
o1.p2()



function c2(){}



c2.prototype.p1 = 1;
c2.prototype.p2 = function(){
    console.log(this.p1);
    
}


var o2 = new c2;
o2.p2()

// make  polyfill of  Object.create  by function 
Object.create = function(prototype){
    var cls = function(){}
    cls.prototype = prototype
    return new cls
}


//ES6 
class Rectangle{
    constructor(height,width){
        this.height = height
        this.width = width
    }

    get area(){
        return this.height * this.width
    }
}