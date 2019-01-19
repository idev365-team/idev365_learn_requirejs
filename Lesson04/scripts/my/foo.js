define("zoo/animal",["my/cat", "my/dog"],function(cat, dog) {
    console.log("foo-->",cat,dog)
    return {
        allSay:function(){
            return cat.say()+"--"+dog.say()
        }
    }
}
);
