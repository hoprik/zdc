// <?php
//     include 'server.php';

//     $connect = mysqli_connect($host_db, $name_db, $password_db, $db_name);

//     if ($connect == false){
//         echo "error 1";
//     }

//     $user = $_GET['user'];
//     $password = $_GET['password'];

//     $result= mysqli_query($connect, "SELECT * FROM users WHERE login='$user'");

//     $login = mysqli_fetch_assoc($result);

//     if (mysqli_num_rows($result) == 0){
//       echo 0;
//     }
//     else{
//       if ($login["password"] == $password){
//         setcookie("id", $login["id_user"], time() + (10 * 365 * 24 * 60 * 60)*99);
//         setcookie("login", $login["login"], time() + (10 * 365 * 24 * 60 * 60)*99);
//         echo 1;
//             }
//       else{
//         echo 0;
//       }
//     }

// ?>

import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
  const user = req.query["user"]
  const password = req.query["password"]

  const db = new tool.DB()
  db.getFromDBByAttribute("users", `login ${user}`).then(userFind=>{
    if (userFind[0].length == 0){
      res.send({rep:0})
    }
    else{
      if (userFind[0][0]["password"] == password){
        res.setCokkie("id", userFind[0][0]["id_user"] )
        res.setCokkie("login", user);
        res.send({rep:1});
      }
      else{
        res.send({rep:0})
      }
    }
  })
}