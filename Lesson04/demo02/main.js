require(["a","b"],function(a,b){
    console.log("main.js->a",a)
    console.log("main.js->b",b)

    b.circleFunc("Hello")
})