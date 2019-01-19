require.config({
    baseUrl:"scripts",
    bundles:{
        'main':['util',"main"],
        "second":["other"],
        "third":["third"]
    }
})

require(['util',"other","third"],function(util,other,third){
    console.log("util",util.name)
    console.log("other",other.name)
    console.log("third",third.name)
})