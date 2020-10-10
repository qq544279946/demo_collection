let obj = {name:'kiki',sex:'girl'};

obj[Symbol.iterator] = function(){
    let index = 0;
    let keys = Object.keys(obj);
    return {
        next(){
            if(index < keys.length){
                return {
                    value:obj[keys[index++]],
                    done:false
                }
            }else{
                return {
                    value:null,
                    done:true
                }
            }
        }
    }
}

let g = obj[Symbol.iterator]();
console.log(g.next())
console.log(g.next())

console.log([...obj])
console.log({...obj})

function fn(...o){
    console.log(o)
}

fn(...obj);
for (const val of obj) {
    console.log(val)
}