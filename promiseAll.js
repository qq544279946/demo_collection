function promiseAll(promises){
    
    let p = new Promise(function(resolve, reject){
        var n = 0;
        var returnRes = new Array(promises.length);
        for(let i = 0; i < promises.length; i++){
            promises[i].then(val => {
                returnRes[i] = val;
                n++;
                if(n == promises.length){
                   resolve(returnRes);            
                }
            }, error =>{
                reject(error);
            })
        }
    });
    return p;
    
}

function a(){
    return new String('sss');
}

console.log(new a());
