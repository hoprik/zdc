<?php
    include 'server.php';

    $connect = mysqli_connect($host_db, $name_db, $password_db, $db_name);

    if ($connect == false){
        echo "error 1";
    }

    $request = mysqli_query($connect, "SELECT * FROM users WHERE 1");
    $user_id = mysqli_num_rows($request);
    $user_id += 1;


    $login = $_GET["email"];
    $password = $_GET["password"];
    $name = $_GET["name"];
    $sb_name = $_GET["surname"];



    $send = mysqli_query($connect, "INSERT INTO users VALUES('$login', '$password', '$name','$sb_name','hello world','$user_id','/avatar/normal.png')");
?>