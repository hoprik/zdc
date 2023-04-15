// <?php
//     include 'server.php';

//     $connect = mysqli_connect($host_db, $name_db, $password_db, $db_name);

//     if ($connect == false){
//         echo "error 1";
//     }

//     $cokkie = $_COOKIE["chat"];

//     $result= mysqli_query($connect, "SELECT * FROM message WHERE chat_id=$cokkie");

//     while (($chat = mysqli_fetch_assoc($result))){
//         $id = $chat['user_id'];
//         $get_user = mysqli_query($connect, "SELECT * FROM users WHERE id_user=$id");
//         $user = mysqli_fetch_assoc($get_user);
//         echo $user['name'] .": " . $chat['text'] . "<br>";
//     }
// ?>

import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
    const db = tool.DB()

    db.getFromDBByAttribute("message", `chat_id=${req.cookies["chat"]}`).then(chat=>{
        let messageFromChat = []
        chat[0].forEach(mesasge => {
            const id = mesasge["user_id"]
            db.getFromDBByAttribute("user", `id_user=${id}`).then(user=>{
                messageFromChat.push(`${user['name']}: ${chat['text']} <br>`)
            })
        });
        res.send(messageFromChat)
    })
}