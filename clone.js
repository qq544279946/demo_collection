// 浅拷贝
function clone(obj){
    if(obj instanceof Object){
        var newObj = Array.isArray(obj) ? [] : {};
         
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                newObj[key] = obj[key];
            }
        }
        return newObj;
        
    }else{
        return obj;
    }
}


// 深拷贝
function deepClone(obj){
    if(obj instanceof Object){
        var newObj = Array.isArray(obj) ? [] : {};
         
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                newObj[key] = deepClone(obj[key]);
            }
        }
        return newObj;
        
    }else{
        return obj;
    }
}

let x = {
    name:'kk',
    card:{
        pwd:'456789',
        user:'tete'
    }
}

let y = deepClone(x);

y.card.pwd = 'kiasd';

console.log(x)
console.log(y)
console.log(y.card === x.card)

