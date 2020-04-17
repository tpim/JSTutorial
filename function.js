function f(){
    return 1
}


var v = f()
var o =new  f()


function cls(){
    this.a = 100
    return {
        getValue:() => this.a
    }
}

var o = new cls;
o.getValue();