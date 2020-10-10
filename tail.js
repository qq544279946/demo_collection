function sum(n,all){
    if(n === 1)
        return n + all;
    return sum(n-1,n + all);
}

console.log(sum(9,0))

