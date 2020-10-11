function watcher(){
    var topics = {}

    return {
        subscribe(topic, fn){
            if(!topics.hasOwnProperty(topic)){
                topics[topic] = [];
            }

            topics[topic].push(fn);
        },

        publish(topic, info){
            if(topics.hasOwnProperty(topic)){
                topics[topic].forEach(fn => {
                    
                    fn(info);
                });
            }
        },

        remove(topic, fn){
            if(!topics[topic])
                return;
            var index = topics[topic].findIndex(handler => handler === fn);
            if(index != -1)
                topics[topic].splice(index, 1);
            
        },

        removeAll(topic){
            if(!topics[topic])
                return;
            topics[topic] = [];
        }

    }
}


let w = watcher();
function test(){
    console.log('test')
}
w.subscribe('test',()=>console.log('hello'));
w.subscribe('test',test);
w.remove('test',test)
w.publish('test');
