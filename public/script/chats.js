import {ajax} from "./modul/ajax.mjs"


ajax("/servScripts/chats.mjs", "GET").then(data=>{
    document.querySelector("body").insertAdjacentHTML("afterend", data)
})

document.addEventListener('click', function (e) {
    const target = e.target.closest('button');
    if (!target) return;

    else{
        console.log(1);
        let chat_id = e.target.className;
        if (typeof chat_id !== 'undefined') {
            ajax("/servScripts/rederect_chat.mjs", "GET", {id:chat_id}).then(()=>{
                window.location.href = "/html/message.html"
            })
            event_()
        }
        else{
    
        }
    }
});