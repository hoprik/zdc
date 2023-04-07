import { ajax } from "./modul/ajax.js"

let membercount = 2
let member2,member3,member4,member5,member6,member7,member8,member9,member10

document.body.addEventListener('click', function (event) {
    const target = event.target.closest('.add');
    if (!target) return;
    else{
        if (membercount != 10){
            membercount += 1
            document.querySelector(".add").remove()
            const input_ = document.createElement("input")
            input_.className = "member"+membercount
            input_.placeholder="добавить человека"
            document.querySelector("body").append(input_)
            const button_ = document.createElement("button")
            button_.className = "add"
            button_.textContent="добавить";
            document.querySelector("body").append(button_)
        }
        else{
            document.querySelector(".add").remove()
        }
    }
});

document.querySelector(".create").addEventListener("click", ()=>{
    switch(membercount){
        case 2: 
            member2=document.querySelector(".member2").value
            member3 = 0
            member4 = 0
            member5 = 0
            member6 = 0
            member7 = 0
            member8 = 0
            member9 = 0
            member10 = 0
            break;
        case 3: 
            member2=document.querySelector(".member2").value
            member3=document.querySelector(".member3").value
            member4 = 0
            member5 = 0
            member6 = 0
            member7 = 0
            member8 = 0
            member9 = 0
            member10 = 0
            break;
        case 4: 
            member2=document.querySelector(".member2").value
            member3=document.querySelector(".member3").value
            member4=document.querySelector(".member4").value
            member5 = 0
            member6 = 0
            member7 = 0
            member8 = 0
            member9 = 0
            member10 = 0
            break;
        case 5: 
            member2=document.querySelector(".member2").value
            member3=document.querySelector(".member3").value
            member4=document.querySelector(".member4").value
            member5=document.querySelector(".member5").value
            member6 = 0
            member7 = 0
            member8 = 0
            member9 = 0
            member10 = 0
            break;
        case 6: 
            member2=document.querySelector(".member2").value
            member3=document.querySelector(".member3").value
            member4=document.querySelector(".member4").value
            member5=document.querySelector(".member5").value
            member6=document.querySelector(".member6").value
            member7 = 0
            member8 = 0
            member9 = 0
            member10 = 0
            break;
        case 7: 
            member2=document.querySelector(".member2").value
            member3=document.querySelector(".member3").value
            member4=document.querySelector(".member4").value
            member5=document.querySelector(".member5").value
            member6=document.querySelector(".member6").value
            member7=document.querySelector(".member7").value
            member8 = 0
            member9 = 0
            member10 = 0
            break;
        case 8: 
            member2=document.querySelector(".member2").value
            member3=document.querySelector(".member3").value
            member4=document.querySelector(".member4").value
            member5=document.querySelector(".member5").value
            member6=document.querySelector(".member6").value
            member7=document.querySelector(".member7").value
            member8=document.querySelector(".member8").value
            member9 = 0
            member10 = 0
            break;
        case 9: 
            member2=document.querySelector(".member2").value
            member3=document.querySelector(".member3").value
            member4=document.querySelector(".member4").value
            member5=document.querySelector(".member5").value
            member6=document.querySelector(".member6").value
            member7=document.querySelector(".member7").value
            member8=document.querySelector(".member8").value
            member9=document.querySelector(".member9").value
            member10 = 0
            break;
        case 10: 
            member2=document.querySelector(".member2").value
            member3=document.querySelector(".member3").value
            member4=document.querySelector(".member4").value
            member5=document.querySelector(".member5").value
            member6=document.querySelector(".member6").value
            member7=document.querySelector(".member7").value
            member8=document.querySelector(".member8").value
            member9=document.querySelector(".member9").value
            member10=document.querySelector(".member10").value
            break;
    }
    let name = document.querySelector(".name").value
    ajax("/php/create_chat.php", "GET", {name:name, member2:member2, member3:member3, member4:member4, member5:member5, member6:member6, member7:member7, member8:member8, member9:member9, member10:member10}).then(data=>{
        window.location.href="chats.html"
    })})