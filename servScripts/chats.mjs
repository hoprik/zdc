import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
    const db = new tool.DB()

    const id = req.cookies["id"];

    let buttons = []
    db.getFromDBByAttribute("user_chat_id", `${id}`).then(chats=>{
        chats[0].forEach(chat => {
            db.getFromDBByAttribute("chat", `${chat["chat_id"]}`).then(infochat=>{
                chats[0].forEach(chat => {
                    buttons.push(`<button class="${chat["user_chat_id"]}">${infochat[0][0]["name"]}</button> <br><br>`)
                });
                try{
                    res.send(buttons)  
                } catch(e){
    
                }  
            })

        });  
        
    })

 

}