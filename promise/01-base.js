class Promise {
    callbacks = []
    state = "pending"
    value = null
    constructor(fn) {
        //resolve  就是 this._resolve.bind(this)
        fn(this._resolve.bind(this)) //执行了定时器
    }
    then(onFulfilled) {
        if (this.state === 'pending') {

            this.callbacks.push(onFulfilled)
        } else {
            onFulfilled(this.value)
        }
        return this
    }
    _resolve(value) {

        this.callbacks.forEach(fn => fn(value))

    }
}

let res = new Promise(resolve => {

    console.log("done")
    resolve('5 seconds')
}).then((tip) => {
    console.log(tip);

}).then((tip) => {
    console.log(tip);

})