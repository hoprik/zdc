import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
    const db = new tool.DB() // иницализируем дб
    console.log(req.query["id"]);

    db.getFromDB("users").then(user=>{ //получение пользователей
        const userid = user[0].length + 1 //юзер id
        
        const login = req.query["email"]
        const password = req.query["password"]
        const name = req.query["name"]
        const surname = req.query["surname"]

        db.insertToDB("users", "id_user, login, password, name, surname, avatar", `'${userid}', '${login}', '${password}', '${name}', '${surname}', './avatar/normal.png'`)
    })

}