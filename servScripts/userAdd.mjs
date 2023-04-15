import * as tool from "./modul/serverTool.mjs"


export function repo(req, res){
    const db = new tool.DB()
    
    db.getFromDB("user_chat_id").then(chat_user=>{
        const chat_user_id = chat_user[0].length + 1
        
        const user_id = req.query["user_id"]
        const chat_id = req.query["chat_id"]

        db.insertToDB("user_chat_id", "user_id, chat_id, user_chat_id", `'${chat_user_id}', '${user_id}', '${chat_id}'`)

        res.send("1")
    })
}