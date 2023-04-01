<?php
    include 'server.php';

    $connect = mysqli_connect($host_db, $name_db, $password_db, $db_name);

    if ($connect == false){
        echo "error 1";
    }

    $request = mysqli_query($connect, "SELECT * FROM chat WHERE 1");
    $chat_id = mysqli_num_rows($request);
    $chat_id += 1;


    $name = $_GET["name"];
    $member1 = $_COOKIE['id'];
    $member2 = $_GET["member2"];
    $member3 = $_GET["member3"];
    $member4 = $_GET["member4"];
    $member5 = $_GET["member5"];
    $member6 = $_GET["member6"];
    $member7 = $_GET["member7"];
    $member8 = $_GET["member8"];
    $member9 = $_GET["member9"];
    $member10 = $_GET["member10"];
    


    $send = mysqli_query($connect, "INSERT INTO chat VALUES('$chat_id', '$name','', '$member1','$member2','$member3','$member4','$member5','$member6','$member7','$member8','$member9','$member10')");
    
?>