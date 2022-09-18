/*
Creating Viewmodel class where we are listing values to be observer 
*/
const observer = (o, f) => new Proxy(o, {
    set: (a, b, c) => f(a, b, c)
})

function MutableLiveData(data) {
    obj = {
        foo: data || null
    } 
}

MutableLiveData.prototype.setValue = function (_value) {
    this.obj.foo = _value 
}

MutableLiveData.prototype.observe = function (callback) {
    this.obj = observer(obj, (target, prop, changes) => {
        target[prop] = changes 
        callback(changes)
    }) 
}