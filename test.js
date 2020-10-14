function change(str){
    return str.replace(/(?=[A-Z])/g, '_').toLowerCase().substring(1);
}

console.log(change('HelloWorld'));


function add(...args){
    var arg = [...args];
    function getParams(param){
        arg = [...arg, param];
        return innerAdd;
    }
    if(args.length < 2){
        return getParams;
    }else{
        return  innerAdd;
    }
    function innerAdd(){
        return arg[0] + arg[1];
    }
}

console.log(add(1)(5)())

a = {
    k:1,
    getOne(){
        console.log(this.k);
    },
    getTwo:()=>{
        console.log(this.k)
    }
}

a.getTwo.bind({k:2})();

// var str = 'abCdEf',
//     reg = /([A-Z])/g;
// var str1 = str.replace(reg, function (a, b) {
//     console.log(a,b)
//     return '_' + b.toLowerCase();
// })
// console.log(str1)


var str = 'ab_cd_ef',
    reg = /_\w/g;
var str1 = str.replace(reg, function (word) {
    console.log(word)
    return word.substring(1).toUpperCase();
})

console.log(str1)

