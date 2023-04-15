import {ajax} from "./modul/ajax.mjs";

ajax("/servScripts/profile.mjs", "GET").then(data=>{
    const item = data.split(",")
    document.querySelector('.name').innerHTML = item[0]
    document.querySelector('head').insertAdjacentHTML("afterend",`<title>профиль:${item[0]}</title>`)
    document.querySelector('.surname').innerHTML = item[1]
    document.querySelector('.status').innerHTML = item[2]
    document.querySelector('body').insertAdjacentHTML("afterbegin",`<img src="${item[3]}" width="100" height="100">`)
})   