requirejs.config({
    baseUrl:'js/lib',
    paths:{
        jquery:"jquery",
        canvas:"canvas",
        sub:"../app/sub",
    }
})

requirejs(['jquery','canvas','sub'],function($,canvas,sub){
    console.log("$->",$)
    console.log("canvas->",canvas)
    console.log("sub->",sub)

    console.log($.getEl("#app"))
    canvas.draw()
    console.log(sub.add(1,2))
})

