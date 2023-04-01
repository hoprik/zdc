<?php
    include 'server.php';

    $connect = mysqli_connect($host_db, $name_db, $password_db, $db_name);

    if ($connect == false){
        echo "error 1";
    }

    $request = mysqli_query($connect, "SELECT * FROM message WHERE 1");
    $message_id = mysqli_num_rows($request);
    $message_id += 1;


    $cokkie = $_COOKIE['id'];
    $chat= $_COOKIE['chat'];


    $text = $_GET["text"];



    $send = mysqli_query($connect, "INSERT INTO message VALUES('$message_id', '$text', '$cokkie','$chat','text')");
?>