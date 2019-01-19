define(["require", "a"],
    function(require, a) {
        console.log("b.js-->a:",a)
        return {
            test:"abc",
            circleFunc:function(title) {
                console.log("title",title)
                return require("a").doSomething(title);
            },
        }
    }
);