import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
    const db = new tool.DB() // иницализируем дб

    db.getFromDB("users").then(user=>{ //получение пользователей
        const userid = user[0].length + 1 //юзер id
        
        const login = tool.getParm(req, "email")
        const password = tool.getParm(req, "password")
        const name = tool.getParm(req, "name")
        const surname = tool.getParm(req, "surname")

        db.insertToDB("users", "id_user, login, password, name, surname, avatar", `'${userid}', '${login}', '${password}', '${name}', '${surname}', './avatar/normal.png'`)
    })

}