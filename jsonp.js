function jsonp(url, params, callback){
    var queryString = url.indexOf('?') == -1 ? '?' : '&';
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            queryString += key + '=' + params[key] + '&'
        }
    }
    var random = 'callback' + Math.random().toString().replace('.', '');
    queryString += `callback=${random}`;

    var script = document.createElement('script');
    script.src = url + queryString;
    window[random] = function(){
        callback(...arguments);
        document.head.removeChild(script);
        
    }
    document.head.appendChild(script);

}

