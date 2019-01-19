require.config({
    baseUrl:"./scripts",
    paths:{
        backbone:"backbone.1.3.3" ,
        "jquery.color":"jquery.color-2.1.2"
    },
    shim:{
        'jquery.color': ['jquery'],
        // 'jquery.scroll': ['jquery'],
        "backbone":{
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        "underscore":{
            exports: '_'
        },
        "foo":{
            exports:"abc",
            init:function(){
                return this.Foo.init()
            }
        }
    }
})


require(["jquery","jquery.color"],function($){
    // $("#block").animate({
	// 	backgroundColor: "#abcdef"
    // }, 1500 );
    
    console.log($.Color( "red" ).toRgbaString() );
})