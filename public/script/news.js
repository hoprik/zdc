import {ajax} from "./modul/ajax.js";

document.querySelector(".exit").addEventListener("click",(e)=>{
    e.preventDefault()
    ajax("/php/exit.php", "GET").then(()=>{
        window.location.href = "login.html"
    });
});