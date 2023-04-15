import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
    const db = new tool.DB()
    db.getFromDBByAttribute("users", `login="${req.cookies["login"]}"`).then(user=>{
        
        res.send(`${user[0][0]["name"]},${user[0][0]["surname"]},${user[0][0]["status"]},${user[0][0]["avatar"]}`)
    })
}