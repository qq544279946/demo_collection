function call(that,...args){
    if(that){
        that.fn = this;
        let res = that.fn(...args);
        delete that.fn;
        return res;
    }else{
        global.fn = this;
        let res = global.fn(...args);
        delete global.fn;
        return res;
    }
    
}

function test(a,b){
    console.log(this);
    console.log(a,b)
}

let x = {
    name:'ll'
}
test.call = call;

test.call(x,10,20);

