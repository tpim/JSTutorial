class Promise {

    callbacks = []
    state = 'pending'
    value = null

    constructor(fn) {
        fn(this._resolve.bind(this))
    }

    then(onFulfulled) {

        return new Promise(resolve => {
            this._handle({
                onFulfulled: onFulfulled || null,
                resolve: resolve
            })
        })
    }

    _handle(callback) {
        if (this.state === 'pending') {
            this.callbacks.push(callback);
            return;
        }

        if (!callback.onFulfulled) {
            callback.resolve(this.value)
            return;
        }

        var ret = callback.onFulfulled(this.value)
        callback.resolve(ret)
    }

    _resolve(value) {
        setTimeout(() => {
            this.state = "fullfilled"
            this.value = value
            this.callbacks.forEach(callback => this._handle(callback))
        })
    }

}

const mockAjax = (url, s, callback) => {

    setTimeout(() => {
        callback(url + '异步请求耗时' + s + 'seconds')
    }, 1000 * s)
}

// new Promise(resolve => {
//     mockAjax("getUserId", 1, function (result) {
//         resolve(result)
//     })
// }).then(result => {
//     console.log(result)
//     const exResult = result
//     return this
// }).then(exResult => {
//     console.log(exResult);

// })




new Promise(resolve => {
    resolve('Index 同步请求')
}).then(result => {
    console.log(result)
})
