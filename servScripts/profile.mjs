import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
    const db = new tool.DB()
    db.getFromDBByAttribute("users", `login=${new tool.Cokkies().getCokkie("login")}`).then(user=>{
        res.send({name:user[0][0]["name"], 
                  surname:user[0][0]["surname"],
                  status:user[0][0]["status"],
                  avatar:user[0][0]["avatar"]})
    })
}