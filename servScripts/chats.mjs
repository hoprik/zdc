// <?php
//     include 'server.php';

//     $connect = mysqli_connect($host_db, $name_db, $password_db, $db_name);

//     if ($connect == false){
//         echo "error 1";
//     }

//     $cokkie = $_COOKIE["id"];

//     $result = mysqli_query($connect, "SELECT * FROM chat WHERE member1=$cokkie OR member2=$cokkie OR member3=$cokkie OR member4=$cokkie OR member5=$cokkie OR member6=$cokkie OR member7=$cokkie OR member8=$cokkie OR member9=$cokkie OR member10=$cokkie");

//     while (($button = mysqli_fetch_assoc($result))){
//         echo '<button class="' . $button['id'] . '">' . $button["name"] . '</button> <br><br>'; 
//     }
// ?>



import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
    const db = new tool.DB()

    // new tool.Cokkies(req, res).setCokkie("id", 1)
    // const id = new tool.Cokkies(req, res).getCokkie("id")

    //res.cookie("id", "1").send('cookie set');
    const id = req.cookies["id"];
    console.log(id);

    db.getFromDBByAttribute("chat", `member1=${id} OR member2=${id} OR member3=${id} OR member4=${id} OR member5=${id} OR member6=${id} OR member7=${id} OR member8=${id} OR member9=${id} OR member10=${id}`).then(chats=>{
        chats[0].forEach(chat => {
            res.send({res:`<button class="${chat["id"]}">${chat["name"]}</button> <br><br>`})
        });     
    })
}