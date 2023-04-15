import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
    const db = new tool.DB()
    
    db.getFromDB("chat").then(chats=>{
        const chat_id = chats[0].length + 1
        
        const name = req.query["name"]
        const member1 = req.cookies["id"]
        const member2 = req.query["member2"]
        const member3 = req.query["member3"]
        const member4 = req.query["member4"]
        const member5 = req.query["member5"]
        const member6 = req.query["member6"]
        const member7 = req.query["member7"]
        const member8 = req.query["member8"]
        const member9 = req.query["member9"]
        const member10 = req.query["member10"]

        db.insertToDB("chat", "id, name, member1, member2, member3, member4, member5, member6, member7, member8, member9, member10", `'${chat_id}', '${name}', '${member1}', '${member2}', '${member3}', '${member4}', '${member5}', '${member6}', '${member7}', '${member8}', '${member9}', '${member10}'`)

        res.send("1")
    })
}