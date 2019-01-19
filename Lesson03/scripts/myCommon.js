define(function(require, exports, module) {
    var a = require('common-1/a');
    var b = require('common-1/b');
    
    console.log("a",a)
    console.log("b",b)
    
    return {
        a:a,
        b:b,
    }
}
);