function MyPromise(fn){

    const PENDDING = 'PENDDING';
    const RESOLVE = 'RESOLVE';
    const REJECT = 'REJECT';

    // 初始化状态
    this.state = PENDDING;
    this.value;
    const self = this;
    const resolveCallback = [];
    const rejectCallback = [];
    function resolve(value){
        self.state = RESOLVE;
        self.value = value;
        setTimeout(()=>{
            if(self.state === RESOLVE){
                resolveCallback.forEach(callback=>callback(value));
            }
        },0)
    }

    function reject(value){
        self.state = REJECT;
        self.value = value;
        setTimeout(()=>{
            if(self.state === REJECT){
                rejectCallback.forEach(callback=>callback(value));
            }
        },0)
    }

    MyPromise.prototype.then = function(onResolve, onReject){
        if(this.state === PENDDING){
            resolveCallback.push(onResolve);
            rejectCallback.push(onReject);
        }else if(this.state === RESOLVE){
            onResolve(this.value)
        }else{
            onReject(this.value)
        }
    }

    fn(resolve, reject);
}


let p = new MyPromise(function(resolve, reject){
    console.log('promise');
    setTimeout(()=>{
        resolve(123);
    },2000);
}).then((data)=>{
    console.log('then',data)
})