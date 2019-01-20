

let btnSend = document.querySelector("#btnSend")
let h1Result = document.querySelector("#result")

let url = "data/info.json?callback=define"
btnSend.onclick=function(){    
    requirejs([url],function(data){
        //清理require的缓存
        h1Result.innerHTML = JSON.stringify(data)
        requirejs.undef(url)
    })
}