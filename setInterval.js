function mySetInterval(fn,time){
    var timer = {flag: true};
    function inter(){
        if(timer.flag){
            fn();
            setTimeout(inter,time)
        }
        
    }
    setTimeout(inter,time);
    return timer;
}

mySetInterval(()=>console.log(1),1000)