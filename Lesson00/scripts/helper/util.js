function sayHi(){
    console.log("Hello,RequireJS!!!")
}


define(function(){
    return {
        sayHi:sayHi,
    }
})