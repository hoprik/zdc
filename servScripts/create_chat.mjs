import * as tool from "./modul/serverTool.mjs"
import {ajax} from "../public/script/modul/ajax.mjs"

export function repo(req, res){
    const db = new tool.DB()
    
    db.getFromDB("chat").then(chats=>{
        const chat_id = chats[0].length + 1
        
        const name = req.query["name"]
        const member1 = req.cookies["id"]

        ajax("/servScripts/userAddFromAddChat.mjs", "GET", {user_id:member1,chat_id:chat_id})

        db.insertToDB("chat", "id, name", `'${chat_id}', '${name}`)

        res.send("1")
    })
}