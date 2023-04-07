import {ajax} from "./modul/ajax.js"
ajax("/php/chat_read.php", "GET").then(data=>{
    document.querySelector(".chat").innerHTML = data;
})
function reset_chat(){
    ajax("/php/chat_read.php", "GET").then(data=>{
        document.querySelector(".chat").innerHTML = data;
    })
    setTimeout(reset_chat, 100)
}
setTimeout(reset_chat, 100)

document.querySelector(".message_send").addEventListener("click", ()=>{
    let message = document.querySelector(".message");   
    if(message.value != ""){
        if(message.value !=" "){
            ajax("/php/chat_send.php", "GET", {text:message.value})
        }
    }
    message.value="";
})