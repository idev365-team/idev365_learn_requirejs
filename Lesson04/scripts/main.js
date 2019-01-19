requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        "zoo/animal":"my/foo"
    }
});

require(["zoo/animal"],function(animal){
    console.log("animal-->",animal)
    console.log(
        animal.allSay()
    )
})