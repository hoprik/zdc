import {ajax} from "./modul/ajax.mjs";

let name
let sb_name
let login
let password
let re_password
let key
let random = Math.random() * 1000000
// let random_key = Math.round(random)
let random_key = 1
let state = 1;

document.querySelector(".continued").addEventListener("click",()=>{

    if (state == 1){
        login = document.querySelector('.login').value
        sb_name = document.querySelector('.sbname').value
        name = document.querySelector('.name').value

        if(login == ''){
        }
        else{
            if(name == ''){
            }
            else{
                if(sb_name == ''){
                }
                else{
                    ajax("/servScripts/chea_email.mjs", "GET", {email:login}).then(data=>{
                        if (data == 0){
                            alert("такое email уже есть");
                        }
                        if(data == 1){
                            document.querySelectorAll("input").forEach((e)=>{e.remove()})
                            document.querySelector("body").insertAdjacentHTML("beforeend",'<input type="password" class="password" placeholder="пароль">')
                            document.querySelector("body").insertAdjacentHTML("beforeend",'<input type="password" class="re_password" placeholder="потверждения пароля">')
                            document.querySelector("body").insertAdjacentHTML("beforeend",'<input type="text" class="key" placeholder="код с почты">')
                            //ajax("/php/mail.php", "GET", {password:random_key, email:login, name:name})
                            state += 1;
                        }
                    })

                    document.querySelectorAll("input").forEach((e)=>{e.remove()})
                    document.querySelector("body").insertAdjacentHTML("beforeend",'<input type="password" class="password" placeholder="пароль">')
                    document.querySelector("body").insertAdjacentHTML("beforeend",'<input type="password" class="re_password" placeholder="потверждения пароля">')
                    document.querySelector("body").insertAdjacentHTML("beforeend",'<input type="text" class="key" placeholder="код с почты">')
                    state += 1;
                }
            }
        }
    }
    if (state == 2){
        password = document.querySelector(".password").value
        re_password = document.querySelector(".re_password").value
        key = document.querySelector(".key").value

        if(password == ''){
        }
        else{
            if(re_password == ''){
            }
            else{
                if (random_key == key){
                    ajax("/servScripts/register.mjs", "GET", {email:login, password:password, name:name, surname:sb_name})
                    window.location.href = "/html/login.html"
                }
            }
        }
    }
})