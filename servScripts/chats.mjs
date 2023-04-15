import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
    const db = new tool.DB()

    const id = req.cookies["id"];

    db.getFromDBByAttribute("chat", `member1=${id} OR member2=${id} OR member3=${id} OR member4=${id} OR member5=${id} OR member6=${id} OR member7=${id} OR member8=${id} OR member9=${id} OR member10=${id}`).then(chats=>{
        let buttons = []
        chats[0].forEach(chat => {
            console.log(buttons);
            buttons.push(`<button class="${chat["id"]}">${chat["name"]}</button> <br><br>`)
        });  
        res.send(buttons)   
    })

}