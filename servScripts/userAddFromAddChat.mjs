import * as tool from "./modul/serverTool.mjs"


export function repo(req, res){
    const db = new tool.DB()
    
    db.getFromDB("user_chat_id").then(chat_user=>{
        const chat_user_id = chat_user[0].length + 1
        db.getFromDB("chat").then(chats=>{
            const chat_id = chats[0].length + 1
            const member1 = req.query["member"]
    
    
            db.insertToDB("user_chat_id", "user_id, chat_id, user_chat_id", `'${chat_user_id}', '${member1}', '${chat_id}'`)
            
            res.send("1")
        })
    })
}