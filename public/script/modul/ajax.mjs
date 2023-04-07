export function ajax(url, type, data=null){
    return new Promise((resolve) =>{
        const request = new XMLHttpRequest();
        var notFirst = false;
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
            url += (notFirst ? '&' : '?') + key + "=" + data[key];
            }
            notFirst = true;
        }

        request.onreadystatechange = ()=>{
            if (request.readyState == 4 && request.status == 200) {
                resolve(request.responseText)
              }
        }
        request.open(type, url)

        request.send()
    })
}

