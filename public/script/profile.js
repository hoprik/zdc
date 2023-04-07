import {ajax} from "./modul/ajax.js";

let data;
data = "name"
ajax("/php/profile.php", "GET", {data: data}).then(data=>{
    document.querySelector('.name').innerHTML = data
    document.querySelector('head').insertAdjacentHTML("afterend",'<title>профиль: '+data+'</title>')
})   
data = "surname"
ajax("/php/profile.php", "GET", {data: data}).then(data=>{
    document.querySelector('.surname').innerHTML = data
})   
data = "status"
ajax("/php/profile.php", "GET", {data: data}).then(data=>{
    document.querySelector('.status').innerHTML = data
})   
data = "avatar"
ajax("/php/profile.php", "GET", {data: data}).then(data=>{
    document.querySelector('body').insertAdjacentHTML("afterbegin",'<img src="'+data+'" width="100" height="100">')
})   