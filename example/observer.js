/*
Creating Viewmodel class where we are listing values to be observer 
*/ 
function LiveObserver(data) {
    obj = {
        foo: data || null
    }
    observerProxy = (o, f) => new Proxy(o, {
        set: (a, b, c) => f(a, b, c)
    })
}

LiveObserver.prototype.setValue = function (_value) {
    this.obj.foo = _value
}

LiveObserver.prototype.observe = function (callback) {
    this.obj = observerProxy(obj, (target, prop, changes) => {
        target[prop] = changes
        callback(changes)
    })
}
 