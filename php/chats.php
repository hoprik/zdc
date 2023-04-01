<?php
    include 'server.php';

    $connect = mysqli_connect($host_db, $name_db, $password_db, $db_name);

    if ($connect == false){
        echo "error 1";
    }

    $cokkie = $_COOKIE["id"];

    $result = mysqli_query($connect, "SELECT * FROM chat WHERE member1=$cokkie OR member2=$cokkie OR member3=$cokkie OR member4=$cokkie OR member5=$cokkie OR member6=$cokkie OR member7=$cokkie OR member8=$cokkie OR member9=$cokkie OR member10=$cokkie");

    while (($button = mysqli_fetch_assoc($result))){
        echo '<button class="' . $button['id'] . '">' . $button["name"] . '</button> <br><br>'; 
    }
?>