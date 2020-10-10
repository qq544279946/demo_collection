let obj = {

}


let p = new Proxy(obj,{
    
    
})

obj.name = 'jojo'
console.log(p.name);