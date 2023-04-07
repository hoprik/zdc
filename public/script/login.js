import {ajax} from "./modul/ajax.mjs";

ajax("/servScripts/system_login.mjs", "GET").then(data=>{
    if (data == 0){
       console.log("хуй тебе, а не вход");
    }
    if(data == 1){
        window.location.href = "/html/login.html"
    }
});

document.querySelector(".log").addEventListener("click",()=>{
    let login = document.querySelector(".login").value;
    let password = document.querySelector(".password").value;
    if (login == ""){
    }
    else{
        if (password == ""){
        }
        else{
                ajax("/php/login.php", "GET", {user: login, password:password}).then(data=>{
                    if (data == 0){
                        alert("неправильный логин или пароль");
                    }
                    if(data == 1){
                        localStorage.setItem("login", login)
                        window.location.href = "/html/news.html"
                    }
                });
        }
    }
    document.querySelector(".login").value = ""
    document.querySelector(".password").value = ""
        
});
