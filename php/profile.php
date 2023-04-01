<?php
    include 'server.php';

    $connect = mysqli_connect($host_db, $name_db, $password_db, $db_name);

    if ($connect == false){
        echo "error 1";
    }

    $cokkie = $_COOKIE['login'];
    $result = mysqli_query($connect, "SELECT * FROM users WHERE login='$cokkie'");
    $login = mysqli_fetch_assoc($result);

    if ($_GET['data'] == 'name'){
        echo $login['name'];
    }

    if ($_GET['data'] == 'surname'){
        echo $login['surname'];
    }

    if ($_GET['data'] == 'status'){
        echo $login['status'];
    }

    if ($_GET['data'] == 'avatar'){
        echo $login['url_img'];
    }
?>