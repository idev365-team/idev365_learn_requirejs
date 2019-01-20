define({
    color:"red",
    getUsers:function(){
        return new Promise(function(resolve,reject){
            let url = 'http://localhost:8080/data/users.json?callback=define'
            require([url],function(data){
                requirejs.undef(url)
                resolve(data)
            },function(err){
                requirejs.undef(url)
                reject(err)
            })
        })
    }
})