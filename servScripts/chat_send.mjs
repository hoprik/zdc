// <?php
//     include 'server.php';

//     $connect = mysqli_connect($host_db, $name_db, $password_db, $db_name);

//     if ($connect == false){
//         echo "error 1";
//     }

//     $request = mysqli_query($connect, "SELECT * FROM message WHERE 1");
//     $message_id = mysqli_num_rows($request);
//     $message_id += 1;


//     $cokkie = $_COOKIE['id'];
//     $chat= $_COOKIE['chat'];


//     $text = $_GET["text"];



//     $send = mysqli_query($connect, "INSERT INTO `message`(`user_id`, `chat_id`, `message_id`, `text`) VALUES ('$cokkie','$chat','$message_id','$text')");
    
// ?>


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