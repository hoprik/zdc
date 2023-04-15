import { ajax } from "./modul/ajax.mjs"

document.body.addEventListener('click', function (event) {
    const target = event.target.closest('.add');
    if (!target) return;
    else{
            document.querySelector(".add").remove()
            const input_ = document.createElement("input")
            input_.className = "member"
            input_.placeholder="добавить человека"
            document.querySelector("body").append(input_)
            const button_ = document.createElement("button")
            button_.className = "add"
            button_.textContent="добавить";
            document.querySelector("body").append(button_)
        }
});

document.querySelector(".create").addEventListener("click", ()=>{
    let name = document.querySelector(".name").value
    document.querySelectorAll(".member").forEach(member=>{
        console.log(member);
        ajax("/servScripts/userAddFromAddChat.mjs", "GET", {member:member.value}).then(e=>{
            ajax("/servScripts/create_chat.mjs", "GET", {name:name}).then(data=>{
                window.location.href="chats.html"
            })})
        })
    })