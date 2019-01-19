function init(){
    return {
        "name":"foo",
        "say":function(){
            console.log("foo say!!")
        }
    }
}
window.Foo = {
    init:init,
}