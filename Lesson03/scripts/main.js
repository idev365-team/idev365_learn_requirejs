// require(["my/shirt"], function(shirt){
//     console.log("shirt:",shirt)
//     console.log("shirt.color:",shirt.color)
//     console.log("shirt.size:",shirt.size)
// } )


// require(["my/shop"], function(shop){
//     console.log(shop)
//     shop.sayHi()
//     shop.sayHello()
// } )


// require.config({
//     "packages": ["common-1/a", "common-1/b"]
// });


require(["myCommon2"], function(myCommon){
    console.log(myCommon)
    console.log(myCommon.a())
    console.log(myCommon.b())
    console.log(myCommon.c)
} )