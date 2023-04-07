import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
    const db = new tool.DB()
    
    db.getFromDB("chat").then(chats=>{
        const chat_id = chats[0].length + 1
        
        const name = tool.getParm(req,"name");
        const member1 = new tool.Cokkies(req, res).getCokkie("id")
        const member2 = tool.getParm(req, "member2");
        const member3 = tool.getParm(req, "member3");
        const member4 = tool.getParm(req, "member4");
        const member5 = tool.getParm(req, "member5");
        const member6 = tool.getParm(req, "member6");
        const member7 = tool.getParm(req, "member7");
        const member8 = tool.getParm(req, "member8");
        const member9 = tool.getParm(req, "member9");
        const member10 = tool.getParm("member10");

        db.insertToDB("chat", "id, name, member1, member2, member3, member4, member5, member6, member7, member8, member9, member10", `'${chat_id}', '${name}', '${member1}', '${member2}', '${member3}', '${member4}', '${member5}', '${member6}', '${member7}', '${member8}', '${member9}', '${member10}'`)

    })
}