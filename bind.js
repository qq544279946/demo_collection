function bind(that, ...args){
    that = that || global;
    return (...otherArgs)=>{
        that.fn = this;
        let res = that.fn(...args,...otherArgs);
        delete that.fn;
        return res;
    }
}

function test(a,b,c){
    console.log(this);
    console.log(a,b,c)
    return a+b+c;
}

let x = {
    name:'ll'
}
test.bind = bind;

let fn = test.bind(x,10,20);
console.log(fn(30))
