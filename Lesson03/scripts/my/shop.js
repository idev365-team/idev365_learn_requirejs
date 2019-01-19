define(["my/shirt","my/hat"], function(shirt,hat){
    return {
        sayHi:function(){
            console.log("sayHi....")
        },
        sayHello:function(){
            let info = {
                shirt:"山地人的商店 出售:"+shirt.name+"颜色:"+shirt.color+"大小:"+shirt.size,
                hat:"山地人的商店 出售:"+hat.name+"颜色:"+hat.color+"大小:"+hat.size
            }
            console.log(info)
        }
    }
} )
