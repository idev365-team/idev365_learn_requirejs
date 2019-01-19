define(function(require, exports, module) {
    var a = require('a');
    var b = require('b');
    
    console.log("a",a)
    console.log("b",b)
    
    return {
        a:a.hello,
        b:b.world,
        c: a.hello()+b.world(),
    }
}
);