class Promise {
    callbacks = []
    state = 'pending'
    value = null

    constructor(fn) {
        fn(this._resolve.bind(this))
    }

    then(onFulfilled) {
        return new Promise(resolve => {
            this._handle({
                onFulfilled: onFulfilled || null,
                resolve: resolve
            })
        })
    }

    _handle(callback) {
        if (this.state === 'pending') {
            this.callbacks.push(callback)
            return
        }
        //如果 then 没有传递任何数据
        if (!callback.onFulfilled) {
            callback.resolve(this.value)
            return
        }

        var ret = callback.onFulfilled(this.value)
        callback.resolve(ret)
    }

    _resolve(value) {

        //判断 value 是否是 Promise 对象
        if (value && (typeof value === 'object' || typeof value === 'function')) {
            var then = value.then;
            if (typeof then === 'function') {
                then.call(value, this._resolve.bind(this))
                return
            }
        }
        this.state = 'fulfilled'
        this.value = value
        this.callbacks.forEach(callback => this._handle(callback))
    }

}
const mockAjax = (url, s, callback) => {

    setTimeout(() => {
        callback(url + '异步请求耗时' + s + 'seconds')
    }, 1000 * s)
}


const pUserId = new Promise(resolve => {
    mockAjax("getUserId", 1, function (result) {
        resolve(result)
    })
})


const pUserName = new Promise(resolve => {
    mockAjax("getUserName", 2, function (result) {
        resolve(result)
    })
})


pUserId.then(id => {
    console.log(id)
    return pUserName
}).then(name => {
    console.log(name)
})
