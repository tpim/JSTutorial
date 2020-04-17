// class Test {

//     constructor(fn) {
//         fn(this.index.bind(this))
//     }

//     index(value) {
//         console.log(this)
//         console.log(value);

//     }
// }



// new Test(resolve => {
//     console.log("1")
//     resolve("params")
//     console.log(this)
// })



function LateBloomer() {
    this.petalCount = 1
}

LateBloomer.prototype.bloom = function () {
    setTimeout(this.declare.bind(this), 1000)
}


LateBloomer.prototype.declare = function () {
    console.log("I am beautiful flower with" + this.petalCount + 'petal!');

}

var flower = new LateBloomer();
flower.bloom()