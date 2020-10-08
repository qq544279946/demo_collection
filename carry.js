function carry(fn, ...args1){
    args1 = args1 || [];
    return function(...args2){
        args2 = args2 || [];
        let args = args1.concat(args2);
        if(args.length >= fn.length){
            return fn(...args)
        }else{
            return carry(fn, ...args);
        }
    }
}

function test(a,b,c,d,e){
    console.log('abc')
}

let x = carry(test,1);
let y = x(2,3,5);
y(999)