

export function repo(req, res){
    const db = new tool.DB() // иницализируем дб
    console.log(req.query["id"]);

    db.getFromDB("message").then(message=>{ //получение пользователей
        const message_id = message[0].length + 1 //юзер id
        
        const userid = req.cookies["id"]
        const chat= req.cookies['chat'];
        const text = req.query["text"]
        db.insertToDB("users", "user_id, chat_id, message_id, text", `'${userid}', '${chat}', '${message_id}', '${text}`)
    })
}