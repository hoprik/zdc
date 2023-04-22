import * as tool from "./modul/serverTool.mjs"
export function repo(req, res){
    const db = new tool.DB()
    
    db.getFromDB("chat").then(chats=>{
        const chat_id = chats[0].length + 1
        
        const name = req.query["name"]

        db.insertToDB("chat", "id, name", `'${chat_id}', '${name}'`)

        res.send("1")
    })
}