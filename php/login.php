<?php
    include 'server.php';

    $connect = mysqli_connect($host_db, $name_db, $password_db, $db_name);

    if ($connect == false){
        echo "error 1";
    }

    $user = $_GET['user'];
    $password = $_GET['password'];

    $result= mysqli_query($connect, "SELECT * FROM users WHERE login='$user'");

    $login = mysqli_fetch_assoc($result);

    if (mysqli_num_rows($result) == 0){
      echo 0;
    }
    else{
      if ($login["password"] == $password){
        setcookie("id", $login["id_user"]);
        setcookie("login", $login["login"]);
        echo 1;
            }
      else{
        echo 0;
      }
    }

?>