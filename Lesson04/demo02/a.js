define(["b"],function(b){
    console.log("a.js--->01",b)
    return {
        doSomething : function(title){
            console.log("a.js--->03->doSomething",b)
            console.log( "This is do something！！"+title+"b->test"+b.test )
        }
    }
})