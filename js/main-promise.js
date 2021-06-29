let promise = $.ajax({
    url:'./user.json',
    method:'get'
})

promise.then(function(){
    console.log('给我一百块')
},function(){
    console.log('被雷劈')
})