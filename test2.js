function solve( a ) {
    // write code here
    
    var maxIndex = -1;
    for(let i = 1; i < a.length - 1; i++){
        if(a[i] > a[i+1] && a[i] > a[i - 1]){
            if(maxIndex = -1){
                maxIndex = i;
            }else if(a[maxIndex] < a[i]){
                maxIndex = i;
            }
            
        }
    }
    if(a[a.length -1] > a[maxIndex] && a[a.length -1] > a[a.length -2]){
        maxIndex = a.length-1;
    }
     if(a[0] > a[maxIndex] && a[0] > a[1]){
        maxIndex = 0;
    }
    return maxIndex;
}
console.log(solve([2,4,1,2,7,8,4]))